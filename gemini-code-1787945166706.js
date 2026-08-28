const scheduleData = {
    "LUNES": [
        {"hora": "8:05 - 8:50", "1": "Matemáticas", "2": "Sociales", "3": "Educación Física", "4": "Sistemas", "5": "Ética"},
        {"hora": "8:50 - 9:35", "1": "Sociales", "2": "Religión", "3": "Educación Física", "4": "Matemáticas", "5": "Sistemas"},
        {"hora": "10:10 - 10:55", "1": "Sociales", "2": "Educación Física", "3": "Español", "4": "Educación Física", "5": "Inglés"},
        {"hora": "10:55 - 11:40", "1": "Inglés", "2": "Educación Física", "3": "Science", "4": "Educación Física", "5": "Matemáticas"},
        {"hora": "11:40 - 12:25", "1": "Recreación", "2": "Inglés R/W", "3": "Matemáticas", "4": "Inglés", "5": "Matemáticas"},
        {"hora": "1:15 - 1:55", "1": "Religión", "2": "Español", "3": "Inglés", "4": "Science", "5": "Inglés R/W"},
        {"hora": "1:55 - 2:35", "1": "Science", "2": "Artes", "3": "Science", "4": "Sociales", "5": "Science"},
        {"hora": "2:35 - 3:15", "1": "Inglés R/W", "2": "Artes", "3": "Science", "4": "Inglés R/W", "5": "Sociales"}
    ],
    "MARTES": [
        {"hora": "8:05 - 8:50", "1": "Español", "2": "Ciencias", "3": "Inglés", "4": "Matemáticas", "5": "Sociales"},
        {"hora": "8:50 - 9:35", "1": "Español", "2": "Música", "3": "Inglés", "4": "Matemáticas", "5": "Sociales"},
        {"hora": "10:10 - 10:55", "1": "Sistemas", "2": "Inglés", "3": "Español", "4": "Sociales", "5": "Educación Física"},
        {"hora": "10:55 - 11:40", "1": "Artes", "2": "Inglés", "3": "Matemáticas", "4": "Religión", "5": "Educación Física"},
        {"hora": "11:40 - 12:25", "1": "Artes", "2": "Sociales", "3": "Sistemas", "4": "Recreación", "5": "Inglés"},
        {"hora": "1:15 - 1:55", "1": "Religión", "2": "Sistemas", "3": "Science", "4": "Inglés", "5": "Artes"},
        {"hora": "1:55 - 2:35", "1": "Inglés", "2": "Matemáticas", "3": "Religión", "4": "Español", "5": "Artes"},
        {"hora": "2:35 - 3:15", "1": "Inglés", "2": "Matemáticas", "3": "Español", "4": "Sociales", "5": "Inglés R/W"}
    ],
    "MIÉRCOLES": [
        {"hora": "8:05 - 8:50", "1": "Educación Física", "2": "Inglés", "3": "Ética", "4": "Sociales", "5": "Matemáticas"},
        {"hora": "8:50 - 9:35", "1": "Educación Física", "2": "Inglés", "3": "Español", "4": "Música", "5": "Matemáticas"},
        {"hora": "10:10 - 10:55", "1": "Science", "2": "Science", "3": "Inglés R/W", "4": "Inglés", "5": "Science"},
        {"hora": "10:55 - 11:40", "1": "Sociales", "2": "Science", "3": "Inglés R/W", "4": "Inglés", "5": "Español"},
        {"hora": "11:40 - 12:25", "1": "Sistemas", "2": "Matemáticas", "3": "Matemáticas", "4": "Recreación", "5": "Religión"},
        {"hora": "1:15 - 1:55", "1": "Matemáticas", "2": "Religión", "3": "Inglés", "4": "Inglés", "5": "Sistemas"},
        {"hora": "1:55 - 2:35", "1": "Español", "2": "Sociales", "3": "Español", "4": "Sistemas", "5": "Ciencias"},
        {"hora": "2:35 - 3:15", "1": "Science", "2": "Español", "3": "Matemáticas", "4": "Sociales", "5": "Inglés"}
    ],
    "JUEVES": [
        {"hora": "8:05 - 8:50", "1": "Matemáticas", "2": "Inglés", "3": "Español", "4": "Artes", "5": "Science"},
        {"hora": "8:50 - 9:35", "1": "Matemáticas", "2": "Recreación", "3": "Español", "4": "Artes", "5": "Sociales"},
        {"hora": "10:10 - 10:55", "1": "Inglés", "2": "Matemáticas", "3": "Música", "4": "Sociales", "5": "Matemáticas"},
        {"hora": "10:55 - 11:40", "1": "Inglés", "2": "Ética", "3": "Artes", "4": "Ética", "5": "Español"},
        {"hora": "11:40 - 12:25", "1": "Español", "2": "Science", "3": "Sistemas", "4": "Libre", "5": "Science"},
        {"hora": "1:15 - 1:55", "1": "Ética", "2": "Science", "3": "Inglés", "4": "Español", "5": "Recreación"},
        {"hora": "1:55 - 2:35", "1": "Ciencias", "2": "Español", "3": "Matemáticas", "4": "Science", "5": "Inglés"},
        {"hora": "2:35 - 3:15", "1": "Sociales", "2": "Español", "3": "Matemáticas", "4": "Science", "5": "Inglés"}
    ],
    "VIERNES": [
        {"hora": "8:05 - 8:45", "1": "Español", "2": "Matemáticas", "3": "Ciencias", "4": "Sociales", "5": "Inglés"},
        {"hora": "8:45 - 9:25", "1": "Inglés", "2": "Español", "3": "Religión", "4": "Sociales", "5": "Música"},
        {"hora": "9:25 - 10:05", "1": "Música", "2": "Inglés", "3": "Matemáticas", "4": "Science", "5": "Religión"},
        {"hora": "11:00 - 11:40", "1": "Matemáticas", "2": "Sistemas", "3": "Ciencias", "4": "Inglés", "5": "Español"},
        {"hora": "11:40 - 12:20", "1": "Science", "2": "Sociales", "3": "Inglés", "4": "Religión", "5": "Español"}
    ]
};