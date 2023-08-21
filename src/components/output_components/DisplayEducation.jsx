import React from "react";

function DisplayEducation({ education }) {
  return (
    <div>
      {/* <h2>Education</h2> */}
      <ul>
          {/* <li> */}
            <li>
              School: {education.school}
            </li>
            <li>
                Grades: {education.grades}
            </li>
            <li>
                College: {education.grades}
            </li>
            <li>
              Degree: {education.degree}
            </li>
            <li>
                Grades: {education.grades}
            </li>
          {/* </li> */}
      </ul>
    </div>
  );
}

export default DisplayEducation;
