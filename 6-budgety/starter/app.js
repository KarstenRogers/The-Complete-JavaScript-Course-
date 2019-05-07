// BUDGET CONTROLLER ***********************************************************************************************************

var budgetController = (function(){

    //Costructors
    var Expense = function(id, description, value){

        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }

    };

    Expense.prototype.getPercentage = function(){

        return this.percentage;

    };

    var Income = function(id, description, value){

        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {

        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });

        data.totals[type] = sum;

    };

    //store all items and all totals.
    //always better to have one data structure where all data goes
    //instead of random variables floating around
    var data = {

        allItems: {

            exp: [],
            inc: []

        },

        totals: {

            exp: 0,
            inc: 0

        },

        budget: 0,

        percentage: -1

    };


    return {

        // public method that allows other modules to add new items into the data structure
        addItem: function(type, des, val){

            var newItem, ID;

            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            };


            //create new item based on 'exp' or inc'
            if (type === 'exp') {

                newItem = new Expense(ID, des, val);

            } else if (type === 'inc') {

                newItem = new Income(ID, des, val);

            };

            //push it into our data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        deleteItem: function(type, id) {

            var ids, index;

            //id = 6
            //data.allItems[type][id];
            //ids = [1,2,4,6,8]
            //index = 3

            //the difference between map and foreach is that
            //map returns a brand new array

            ids = data.allItems[type].map(function(current) {

                return current.id;

            });

            //indexOf method returns the index number of the element of the array
            index = ids.indexOf(id);

            if (index !== -1) {
                //splice arguments: position number, the number of elements
                data.allItems[type].splice(index, 1)
            };

        },

        calculateBudget: function() {

            // Calculate total income and expenses

            calculateTotal('inc');
            calculateTotal('exp');

            // Calculate the budget: income - expenses

            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of inome that we spent

            if (data.totals.inc > 0) {

                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);

                // Expense = 100 and income = 200, spent 50% = 100/200 = 0.5 * 100

            } else {

                data.percentage = -1; // so the percentage isn't 'infinity'

            }

        },

        calculatePercentages: function() {

            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });

        },

        getPercentages: function() {

            var allPerc = data.allItems.exp.map(function(cur) {

                return cur.getPercentage();

            });

            return allPerc;

        },

        getBudget: function() {

            return {

                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage

            };

        },

        testing: function() {

            console.log(data);

        }
    };


})();

// UI CONTROLLER ***************************************************************************************************************

var UIController = (function() {

    //Makes life easier: if we change the value in HTML, we don't have to change everything in the code
    var DOMstring = {

        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type) {
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };

    //Make them public
    return {

        getInput: function() {

            return {

                type: document.querySelector(DOMstring.inputType).value, // Will be either inc (income) or exp (expense)
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value) //Parse it to a number so we can calculate the totals

            };

        },

        addListItem: function(obj, type) {

            var html, newHtml, element;

            //Create HTML string with placeholder text
            if (type === 'inc'){

                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp'){

                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID) {

            //in JS we can't delete an item directly, we can only delete the child

            var el = document.getElementById(selectorID)

            el.parentNode.removeChild(el);

            //makes sense.


        },

        //clear the fields of the inputs after hitting Enter
        clearFields: function(){

            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);
            //Trasform a list into an array
            //slice returns a copy of the array that is called on

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {

                current.value = "";

            });

            fieldsArr[0].focus();

        },

        displayBudget: function(obj) {
            var type;

            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstring.incomeLabel).textContent = formatNumber(obj.totalInc,
                'inc');
            document.querySelector(DOMstring.expensesLabel).textContent = formatNumber(obj.totalExp,
                'exp');


            if (obj.percentage > 0) {
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstring.percentageLabel).textContent = '---';
            };

        },

        displayPercentages: function(percentages) {

            var fields = document.querySelectorAll(DOMstring.expensesPercLabel);

            //we call the nodeListForEach function we pass a callback function

            var nodeListForEach = function(list, callback) {

                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }

            };

            nodeListForEach(fields, function(current, index) {

                if(percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                };

            });

        },

        displayMonth: function () {
            var now, month, year;

            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();

            year = now.getFullYear();
            document.querySelector(DOMstring.dateLabel).textContent = months[month] + ' ' + year;
        },

        //Public so we can pass it to the controller!
        getDOMstrings: function() {

            return DOMstring;

        }

    };

})();

// GLOBAL APP CONTROLLER *******************************************************************************************************
// where we tell other modules what to do

var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        //The dom object from the UI controller!
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {

            if (e.keyCode === 13 || e.which === 13) {  //good practice to include both

                ctrlAddItem();

            };

            // we first added an EventListener here to the container,
            // which is the first element that all of
            // the income and expense items have in common
            document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
            //instead of adding one EventListener to all the elements we add them to the cointainer
            //and let the event bubbling up

        });

    };

    var updatePercentages = function(){

        // 1. Calculate percentages

        budgetCtrl.calculatePercentages();

        // 2. Read percentages from the budget controller

        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percentages

        UICtrl.displayPercentages(percentages);

    };


    var updateBudget = function() {

        // 1. Calculate the budget

        budgetCtrl.calculateBudget();

        // 2. Return the budget

        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI

        UICtrl.displayBudget(budget);

    };

    var ctrlAddItem = function(){

        var input, newItem;

        // 1. Get the field input data

        input = UICtrl.getInput();

        //if we have a significant value the input is added
        //if there is no number or descriptio or the number is 0, nothing happens

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the budget controller

            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI

            UICtrl.addListItem(newItem, input.type);

            // 4. Clear fields

            UICtrl.clearFields();

            // 5. Calculate and update budget

            updateBudget();

            // 6. Calculate and update percentages

            updatePercentages();

        };

    };

    var ctrlDeleteItem = function(event) {

        var itemID;

        // selects the right parent
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            //inc-1 -> split 'inc' and '1'
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);


            // 1. delete the item from the data structure

            budgetCtrl.deleteItem(type, ID);

            // 2. delete the item form the UI

            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget

            updateBudget();

            // 4. Calculate and update percentages

            updatePercentages();


        };
    };

    return {

        //public initialization function

        init: function() {

            console.log('Application has started.');

            UICtrl.displayMonth();

            UICtrl.displayBudget({
                budget: 0,
                totalExp: 0,
                totalInc: 0,
                percentage: -1
            });

            setupEventListeners();

        }

    };


})(budgetController, UIController);

controller.init();