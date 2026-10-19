const { sequelize, Student, Mark } = require('./models');

async function main() {
    try {
        const PashaStudent = await Student.create({
            name: 'pasha',
            course: 1
        })
        const PashasMarks = await Mark.create({
            mathMark: 12,
            physicsMark: 10,
            englishLanguageMark: 11,
            studentId: PashaStudent.id
        })
        const studentWithMarks = await Student.findOne(
            {
                where: {id: PashaStudent.id},
                include: {model: Mark, as: 'marks'}
            }
        )
        console.log("Student with marks " + JSON.stringify(studentWithMarks));
    } catch (error) {
        console.error(error);
    } finally {
        await sequelize.close();
    }
}
main();
