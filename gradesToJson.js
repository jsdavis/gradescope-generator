const CsvToArray = require('csv-to-array');
const fs = require('fs');

const columns = ['Name', 'D', 'M', 'W'];
const grade_file = 'grades.csv';
const grade_json = 'grades.json';

module.exports = function(cb) {
    CsvToArray({
        file: grade_file,
        columns: columns,
     }, (err, grades) => {
        if (err) {
            console.error('An error occurred parsing the grades csv file. Aborting.');
            console.error(err);
            process.exit(1);
        }

        // First element has original column names
        grades[0] = { Name: '', D: '', M: '', W: '' };

        grades.forEach( (student, i) => {
            if (i !== 0) {
                student.D = student.D == 'x' ? '1' : student.D == 'E' ? '0.5' : '0';
                student.M = student.M == 'x' ? '1' : student.M == 'E' ? '0.5' : '0';
                student.W = student.W == 'x' ? '1' : student.W == 'E' ? '0.5' : '0';
            }
        });

        cb(grades);
    });
}
