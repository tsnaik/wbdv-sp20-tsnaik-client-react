function UserService() {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/tsnaik/courses/';

    //DELETE - Delete
    this.deleteCourse = (id) => fetch(`${this.url}${id}/`, {
        method: 'DELETE'
    }).then((response) => response.json());

    this.findCourseById = (id) => fetch(`${this.url}${id}/`, {
        method: 'GET'
    }).then((response) => response.json());

    this.updateCourse = (id, course) =>
        fetch(`${this.url}${id}/`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => response.json());

    // POST - Create
    this.createCourse = (course) => fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => response.json());

    // GET - Read
    this.findAllCourses = () =>
        fetch(this.url)
            .then((response) => response.json());
}
