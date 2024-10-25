const student = {
    name: "Marie",
    age: 21,
    courses: ["Math", "Physics", "Chemistry"],
    grade: "A"
};

student.age = 21;
student.grade = "A";

student.courses.push("Math", "Physics", "Chemistry");

const physicsIndex = student.courses.indexOf("Physics");

const firstTwoCourses = student.courses.slice(0, 2);

console.log("Objet student complet :", student);
console.log("Index de 'Physics' :", physicsIndex);
console.log("Nouveau tableau avec les deux premiers éléments :", firstTwoCourses);
