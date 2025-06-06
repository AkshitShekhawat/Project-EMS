import React from 'react';

const AboutComponent = () => {
  return (
    <div className="container mt-4 bg-light p-4 rounded">
      <h2>About My Employee Management System Project</h2>
      <p>
        This Employee Management System is a full-stack web application designed to manage employee records efficiently. 
        It provides Create, Read, Update, and Delete (CRUD) functionality for employee data along with Integrated RESTful APIs.
      </p>
      <p>
        The frontend is built with React.js and styled with Bootstrap for a responsive user interface, while the backend uses Spring Boot 
        with Spring Data JPA to interact with a MySQL database. RESTful APIs facilitate communication between the client and server.
      </p>
      <p>
        Key features include:
        <ul>
          <li>Employee record management with full CRUD operations</li>
          <li>Integration of REST APIs for seamless data exchange</li>
          <li>Responsive UI built with React and Bootstrap</li>
        </ul>
      </p>
      <p>
        Tech Stack: Spring Boot 3.4.3, Spring Data JPA, MySQL, Maven, React.js, Vite.js, Bootstrap, Axios, JavaScript, IntelliJ IDEA, VS Code
      </p>
    </div>
  );
};

export default AboutComponent;
