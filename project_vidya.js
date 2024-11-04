const { log } = require('console');
const readline = require('readline');

var defaultUsers = [
    { id: 1, name: 'Adi Thomas', userName: 'adi', password: 'thomas' },
    { id: 2, name: 'Abdul Nadeem', userName: 'abdul', password: 'nadeem' },
];

var learners = [
    { learnerId: 1, studentName: 'Affan Danish', contactNumber: '8186948064', emailId: 'affandanish@gmail.com', userName: 'affandanish@projectvidya.com', password: 'Affan@123', isActive: true, uniqueId: 12345 },
    { learnerId: 2, studentName: 'Saniya Firdous', contactNumber: '9553539123', emailId: 'saniyafirdous@gmail.com', userName: 'saniya@projectvidya.com', password: 'Saniya@123', isActive: true, uniqueId: 98761 },
    { learnerId: 3, studentName: 'Asmath Siddiqui', contactNumber: '9848891203', emailId: 'asmath@gmail.com', userName: 'asmath@projectvidya.com', password: 'Asmath@123', isActive: false, uniqueId: 23412 },
];

var courses = [
    { id: 1, uniqueCourseId: 'ABC123', courseName: 'OOPS Using Java', trainerName: 'Durga Sir', courseDesc: 'Learn Java concepts from industry expert, enroll and learn on your availability', courseFee: 3500, courseStartDate: '2024/10/05', currentStatus: 'Open For Registrations', totalLearners: 0 },
    { id: 2, uniqueCourseId: 'XYZ123', courseName: 'JavaScript', trainerName: 'Harry', courseDesc: 'JavaScript is the essential language to build the webapps, enroll in the course to learn from Harry an professional Trainer on web development', courseFee: 3000, courseStartDate: '2024/11/04', currentStatus: 'Open For Registrations', totalLearners: 0 },
    { id: 3, uniqueCourseId: 'ASDF120', courseName: 'React JS', trainerName: 'Vinod Thapa', courseDesc: 'Learn building ', courseFee: 3500, courseStartDate: '2024/11/05', currentStatus: 'Started', totalLearners: 0 },
    { id: 4, uniqueCourseId: 'TREW781', courseName: 'GO LANG', trainerName: 'Hitesh Chowdary', courseDesc: 'Learn the concepts of building Microservices using Go Lang from Hitesh, This course will make you job ready after completion.', courseFee: 4000, courseStartDate: '2024/11/05', currentStatus: 'Open For Registrations', totalLearners: 0 },
];

var courseEnrollments = [
    { id: 1, learnerId: '12345', courseId: 'ABC123', joiningDate: '2024-10-31', modeOfPayment: 'Phone Pe' },
    { id: 2, learnerId: '12345', courseId: 'TREW781', joiningDate: '2024-10-31', modeOfPayment: 'GPay' },
    { id: 3, learnerId: '98761', courseId: 'ASDF120', joiningDate: '2024-11-01', modeOfPayment: 'Phone Pe' },
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function adminLogin() {
    console.log('===================  You are Signing in as ADMIN =================== ');
    rl.question('Please enter your Username : ', (userName) => {
        rl.question('Please enter your Password : ', (password) => {

            const user = defaultUsers.filter(user =>
                user.userName === userName && user.password === password
            );
        console.log(user.length);

            if (user.length > 0) {
                    console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
                    console.log(`Login successful! Welcome, ${user[0].name}.`);
                    console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
                    showAdminMenu();                
            } else {
                console.log('Invalid username or password. Please try again.');
                adminLogin();
            }
        });
    });
}

function learnerLogin() {
    console.log('===================  You are Signing in as Learner =================== ');
    rl.question('Please enter your Username : ', (userName) => {
        rl.question('Please enter your Password : ', (password) => {

            const user = learners.find(user =>
                user.userName.toLowerCase() === userName.toLowerCase() && user.password === password
            );

            if (user) {
                console.log(user.isActive);
                if (user.isActive === false) {
                    console.log("😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭");
                    
                    console.log("You have been banned to use this Application kindly contact your admin to get the access back.");
                    console.log('Exiting from the application. Dear ' + user.studentName);
                    console.log("😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭");

                    rl.close();
                } else {
                    console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
                    console.log(`Login successful! Welcome, ${user.studentName}.`);
                    console.log(`Student Name : ${user.studentName}, Contact Number: ${user.contactNumber}, Email ID: ${user.emailId}, Active: ${user.isActive}`);
                    console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");

                    showLearnerMenu();
                }
            } else {
                console.log('Invalid username or password. Please try again.');
                learnerLogin();
            }
        });
    });
}


function learnerRegistration() {
    console.log('===================  NEW LEARNER REGISTRATION =================== ');
    rl.question('Please enter your Name : ', (studentName) => {
        rl.question('Please enter your Contact Number : ', (contactNumber) => {
            rl.question('Please enter your Email ID : ', (emailId) => {
                var generatedUserName = studentName.replace(/\s+/g, '').toLowerCase() + "@projectvidya.com";
                const user = learners.find(user =>
                    user.userName.toLowerCase() === generatedUserName.toLowerCase()
                );

                if (contactNumber.length != 10) {
                    console.log("👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀");
                    console.log("Please enter valid 10 digit mobile number...");
                    console.log("👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀");
                    learnerRegistration();
                } else {
                    if (user) {
                        console.log("🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔");
                        console.log("Username already registered in the system generating unique userName for " + studentName);
                        const randomNumber = Math.floor(Math.random() * 10);
                        generatedUserName = studentName.replace(/\s+/g, '').toLowerCase() + randomNumber + "@projectvidya.com";
                        console.log("🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔");
                    }
                    const generatedPassword = generateRandomString(7);

                    const newLearner = {
                        learnerId: learners.length + 1,
                        studentName: studentName,
                        emailId: emailId,
                        contactNumber: contactNumber,
                        userName: generatedUserName,
                        password: generatedPassword,
                        isActive: true,
                        uniqueId: generateRandomId(),
                    };
                    // console.log(newLearner);
                    learners.push(newLearner);
                    console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
                    console.log('Your details have been saved successfully, Your system generated userName : ' + generatedUserName + ' Your Account Password : ' + generatedPassword);
                    console.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");

                    learnerLogin();
                }
            });
        });
    });
}


function registerCourse() {
    console.log('===================  NEW Course REGISTRATION =================== ');
    rl.question('Please enter Course Title : ', (courseTitle) => {
        rl.question('Please enter Trainer Name : ', (trainerName) => {
            rl.question('Please enter Small Description about the Course : ', (courseDescription) => {
                rl.question('Please enter Course Fee : ', (courseFee) => {
                    rl.question('Please enter Course Start Date (YYYY/MM/DD): ', (startDate) => {
                        if (courseTitle.length == 0) {
                            console.log("Please provide the Course Title");
                        }
                        if (trainerName.length == 0) {
                            console.log("Please provide the Trainer Name");
                        }
                        if (courseTitle.courseDescription == 0) {
                            console.log("Please provide the Course Description");
                        }
                        if (parseInt(courseTitle.courseFee) <= 0) {
                            console.log("Please provide the valid Course fee");
                        }
                        const uniqueId = generateRandomString(7);
                        const newCourse = {
                            id: courses.length + 1,
                            uniqueCourseId: uniqueId,
                            courseName: courseTitle,
                            trainerName: trainerName,
                            courseDesc: courseDescription,
                            courseFee: courseFee,
                            courseStartDate: startDate,
                            currentStatus: "Open For Registration",
                            totalLearners: 0,
                        };

                        courses.push(newCourse);
                        console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
                        console.log("Course " + courseTitle + " info have been saved Successfully");
                        console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
                        displayCourses();
                    });
                });
            });
        });
    });
}


function displayCourses() {
    if (courses.length === 0) {
        console.log("No Courses available to display.");
    } else {
        console.log(" ========================= DISPLAYING AVAILABLE COURSES ========================= ");

        console.log("List of Courses:");
        courses.forEach(course => {
            console.log(`ID: ${course.id}, Course Title : ${course.courseName}, Trainer Name: ${course.trainerName}, Start Date: ${course.courseStartDate}, Status: ${course.currentStatus}, Total Enrollments: ${course.totalLearners}, Course Fee: ${course.courseFee}, Unique Course ID: ${course.uniqueCourseId} `);
        });
        console.log(" ======================================================  ========================= ");
    }
    showAdminMenu();
}

function displayCoursesForLearner() {
    if (courses.length === 0) {
        console.log("No Courses available to display.");
    } else {
        console.log(" ========================= DISPLAYING AVAILABLE COURSES ========================= ");

        console.log("List of Courses:");
        courses.forEach(course => {
            console.log(`ID: ${course.id}, Course Title : ${course.courseName}, Trainer Name: ${course.trainerName}, Start Date: ${course.courseStartDate}, Status: ${course.currentStatus}, Total Enrollments: ${course.totalLearners}, Course Fee: ${course.courseFee}, Unique Course ID: ${course.uniqueCourseId} `);
        });
        console.log(" ======================================================  ========================= ");
    }
    showLearnerMenu();
}

function searchCourseByName() {
    rl.question('Enter the name of the Course: ', (courseName) => {
        const foundCourses = courses.filter(course => course.courseName.toLowerCase().includes(courseName.toLowerCase()));
        if (foundCourses.length > 0) {
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");

            foundCourses.forEach(course => {
                console.log(`ID: ${course.id}, Course Title : ${course.courseName}, Trainer Name: ${course.trainerName}, Start Date: ${course.courseStartDate}, Status: ${course.currentStatus}, Total Enrollments: ${course.totalLearners}, Course Fee: ${course.courseFee}, Unique Course ID: ${course.uniqueCourseId} `);
            });
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
        } else {
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
            console.log('No Course found with that name ' + courseName);
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
        }
         showAdminMenu();
    });
}

function searchCourseByNameForLearner() {
    rl.question('Enter the name of the Course: ', (courseName) => {
        const foundCourses = courses.filter(course => course.courseName.toLowerCase().includes(courseName.toLowerCase()));
        if (foundCourses.length > 0) {
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");

            foundCourses.forEach(course => {
                console.log(`ID: ${course.id}, Course Title : ${course.courseName}, Trainer Name: ${course.trainerName}, Start Date: ${course.courseStartDate}, Status: ${course.currentStatus}, Total Enrollments: ${course.totalLearners}, Course Fee: ${course.courseFee}, Unique Course ID: ${course.uniqueCourseId} `);
            });
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
        } else {
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
            console.log('No Course found with that name ' + courseName);
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
        }
         showLearnerMenu();
    });
}


function deleteCourseDetails() {
    rl.question('Enter Unique Course ID to delete: ', (id) => {
        const courseIndex = courses.findIndex(course => course.uniqueCourseId === id);
        if (courseIndex !== -1) {
            courses.splice(courseIndex, 1);

            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");

            console.log(`Course with Unique ID :  ${id} deleted successfully!`);
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
            displayCourses();
        } else {
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
            console.log('No Course found with the given ID ' + id);
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
        }
        showAdminMenu();
    });
}


function displayLearners() {
    if (learners.length === 0) {
        console.log("No Learners to display.");
    } else {
        console.log(" ========================= DISPLAYING AVAILABLE STUDENTS ========================= ");

        console.log("List of Students:");
        learners.forEach(user => {
            console.log(`ID: ${user.learnerId}, Student Name: ${user.studentName}, Contact Number: ${user.contactNumber}, Email ID: ${user.emailId}, UserName: ${user.userName}, Is Active: ${user.isActive}, Unique ID: ${user.uniqueId}`);
        });
        console.log(" ======================================================  ========================= ");

    }
}



// Function to search for a user by name
function searchLeanerByName() {
    rl.question('Enter the name of the Learner to search for: ', (name) => {
        const foundUsers = learners.filter(learner => learner.studentName.toLowerCase().includes(name.toLowerCase()));
        if (foundUsers.length > 0) {
            
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");

            foundUsers.forEach(user => {
                console.log("Search results:");
                console.log(`ID: ${user.learnerId}, Student Name: ${user.studentName}, Contact Number: ${user.contactNumber}, Email ID: ${user.emailId}, UserName: ${user.userName}, Is Active: ${user.isActive}, Unique ID: ${user.uniqueId}`);
            });
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");

        } else {
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
            console.log('No learner found with that name.');
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
        }
        showAdminMenu();
    });
}

function deleteLearner() {
    rl.question('Enter Unique ID of the Learner to delete: ', (id) => {
        const userIndex = learners.findIndex(user => user.uniqueId === parseInt(id));
        if (userIndex !== -1) {
            learners.splice(userIndex, 1);
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
            console.log(`Learner with ID ${id} deleted successfully!`);
            console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
            displayLearners();
        } else {
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
            console.log('No Learner found with the given ID ' + id);
            console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
        }
        showAdminMenu();
    });
}

function updateLearnerPassword() {
    rl.question('Enter your Username: ', (userName) => {
        rl.question('Enter your New Password: ', (newPassword) => {
            const foundUsers = learners.filter(user => user.userName.toLowerCase() === userName);
            if (foundUsers.length > 0) {
                const index = learners.findIndex(learner => learner.userName === userName);
                console.log("Updating " + foundUsers[0].studentName + " Password");
                const updatedFields = {
                    password: newPassword
                }
                console.log("Found Index : " + index);
                console.log(updatedFields);
                learners[index] = { ...learners[index], ...updatedFields };
                console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
                console.log("Your Password have been successfully updated Dear " + foundUsers[0].studentName + " Please login again to access the Application.");
                console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");
            } else {
                console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
                console.log('No users found with that input details to update the password.');
                console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
            }
            learnerLogin();
        });
    });
}

// Function to display users
function displayUsers() {
    if (defaultUsers.length === 0) {
        console.log("No users to display.");
    } else {
        console.log("List of users:");
        defaultUsers.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
        });
    }
}


// Function to display users
function displayCourseEnrollments() {
    if (courseEnrollments.length === 0) {
        console.log("No Students joined any course.");
    } else {
        console.log("List of Learners:");
        courseEnrollments.forEach(learner => {
            const course = courses.filter(availableCourse => availableCourse.uniqueCourseId === learner.courseId);
            const learnerInfo = learners.filter(singleLearner => singleLearner.uniqueId == learner.learnerId);
            console.log(`ID: ${learner.id}, Student Name: ${learnerInfo[0].studentName}, Course Name : ${course[0].courseName}, Joining Date : ${learner.joiningDate} , Mode Of Payment : ${learner.modeOfPayment} `);
        });
    }
}


function displayCourseEnrollmentsOfLearner(inputId) {
    if (courseEnrollments.length === 0) {
        console.log("No Courses found to display.");
    } else {
        console.log("List of Enrolled Courses:");
        const foundCourses = courseEnrollments.filter(learner => learner.learnerId == inputId);
        foundCourses.forEach(enrolledCourse => {
            const course = courses.filter(availableCourse => availableCourse.uniqueCourseId === enrolledCourse.courseId);
            const learnerInfo = learners.filter(singleLearner => singleLearner.uniqueId == enrolledCourse.learnerId);
            console.log(`ID: ${enrolledCourse.id}, Student Name: ${learnerInfo[0].studentName}, Course Name : ${course[0].courseName}, Joining Date : ${enrolledCourse.joiningDate} , Mode Of Payment : ${enrolledCourse.modeOfPayment} `);
        })
    }
    showLearnerMenu();
}

// Function to add a new user
function joinCourse() {
    rl.question('please enter your Unique Learner ID: ', (learnerId) => {
        rl.question('Please enter course Id for enrollment: ', (courseId) => {
            rl.question('Enter 1 for Phone Pe 2 for Gpay: ', (paymentOption) => {

                const existingLearner = courseEnrollments.filter(singleEnrollment => singleEnrollment.courseId === courseId && singleEnrollment.learnerId === learnerId);
                if (existingLearner.length > 0) {
                    console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
                    console.log("The provided student is already enrolled for the requested course. Multiple enrollments for the same course is not allowed...");
                    console.log(" 😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔 ");
                    showLearnerMenu();
                } else {
                    const modeOfPayment = parseInt(paymentOption) == 1 ? "Phone Pe" : "Gpay";

                    const currentDate = new Date();
                    const currentDateString = currentDate.toISOString().split('T')[0]; 
                    console.log(currentDateString);
                    const enrollment = {
                        id: defaultUsers.length + 1,
                        learnerId: learnerId,
                        courseId: courseId,
                        joiningDate: currentDateString,
                        modeOfPayment: modeOfPayment,
                    };
                    courseEnrollments.push(enrollment);
                    console.log("👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");                    
                    console.log('Congratulations you have enrolled Successfully for the Course. HAPPY LEARNING!!!!');
                    console.log("👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 ");

                    displayCourseEnrollmentsOfLearner(learnerId);
                }

            });
        });

    });
}

// Function to delete a user by ID
function deleteUser() {
    rl.question('Enter the ID of the user to delete: ', (id) => {
        const userIndex = defaultUsers.findIndex(user => user.id === parseInt(id));
        if (userIndex !== -1) {
            defaultUsers.splice(userIndex, 1);
            console.log(`User with ID ${id} deleted successfully!`);
            displayUsers();
        } else {
            console.log('User not found.');
        }
        showAdminMenu();
    });
}

function searchUser() {
    rl.question('Enter the name of the user to search for: ', (name) => {
        const foundUsers = defaultUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        if (foundUsers.length > 0) {
            console.log("Search results:");
            foundUsers.forEach(user => {
                console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
            });
        } else {
            console.log('No users found with that name.');
        }
        showAdminMenu();
    });
}

// Function to show the menu
function showAdminMenu() {
    console.log("\nMenu Options:");
    console.log("reg_course. Register New Course");
    console.log("view_courses. View All Courses");
    console.log("search_course. Search Specific Course");
    console.log("delete_course. Delete Course Info");
    console.log("view_learners. List All Learners");
    console.log("search_learner. Search Learner with Name");
    console.log("delete_learner. Delete a Learner");
    console.log("display_enrollments. List All Enrollments"); 
    console.log("log_out. Log Out"); 
    console.log("exit. Exit");

    rl.question('Type your choice from the Menu: ', (choice) => {
        switch (choice) {
            case 'reg_course':
                registerCourse();
                break;
            case 'view_courses':
                displayCourses();
                break;
            case 'search_course':
                searchCourseByName();
                break;
            case 'delete_course':
                deleteCourseDetails();
                break;
            case 'view_learners':
                displayLearners()
                showAdminMenu();
                break;
            case 'search_learner':
                searchLeanerByName();
                break;
            case 'delete_learner':
                deleteLearner();
                break;
            case 'display_enrollments':
                displayCourseEnrollments();
                showAdminMenu();
                break;
            case 'log_out':
                showWelcomePage();
                break;
            case 'exit':
                console.log('Exiting the application. Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                showAdminMenu();
                break;
        }
    });
}


// Function to show the menu
function showLearnerMenu() {
    console.log("\nMenu Options:");
    console.log("update_pass. Update Your Password");
    console.log("view_courses. View All Courses");
    console.log("search_course. Search Specific Course");
    console.log("join_course. Course Enrollment");
    console.log("exit. Exit");
    rl.question('Choose an option from the available menu: ', (choice) => {
        switch (choice) {
            case 'update_pass':
                updateLearnerPassword();
                break;
            case 'view_courses':
                displayCoursesForLearner();
                break;
            case 'search_course':
                searchCourseByNameForLearner();
                break;
            case 'join_course':
                joinCourse();
                break;
            case 'exit':
                console.log('Thanks for using Project Vidya. Good Bye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                showLearnerMenu();
                break;
        }
    });
}

function showWelcomePage() {
    console.log("\nMenu Options:");
    console.log("admin. Register New Course");
    console.log("student. View All Courses");
    console.log("exit. Exit");

    rl.question('Choose an option (1-5): ', (choice) => {
        switch (choice) {
            case 'admin':
                adminLogin();
                break;
            case 'student':
                learnerLogin();                
                break;
            case 'exit':
                console.log('Exiting the application. Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                showWelcomePage();
                break;
        }
    });
}


function startApp() {
    console.log(" =================================== ");
    console.log("Welcome to Project VIDYA..");
    console.log(" =================================== ");

    showWelcomePage();
}

startApp();


function generateRandomId() {
    // Generate a random number between 10000 and 99999
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    console.log("Generated 5-digit random number:", randomNumber);
    return randomNumber;
}

function generateRandomString(n) {
    let result = '';
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;

    for (let i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    console.log("Generated random string:", result);
    return result;
}
