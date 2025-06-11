const student = {
    fullName : "ankush",
    marks: 94.4,
    printMarks: function() {
        console.log("Marks = ",this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
        }
};


const karanArjun = {
    salary: 50000,


};
karanArjun.__proto__ = employee;