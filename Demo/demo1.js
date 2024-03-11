

var view = document.querySelector("#demo")

var coursesAPI = "http://localhost:3000/courses"




function start () {
    getCoursesAPI(renderCourses);

    handlecreateCourses();
}

start();


function getCoursesAPI(callback) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function createCourses (data , callback) {
    var options = {
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(data)
    }


    fetch(coursesAPI,options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)

}

function deleteCourses (id) {
    var options = {
        method : 'DELETE',
        headers: {
            "Content-Type": "application/json"
          }
    }


    fetch(coursesAPI+"/"+id,options)
        .then(function (response) {
            return response.json();
        })
        .then(function (){
            var deleteItem = document.querySelector(".courses-"+post.id)

            if (deleteItem) {
                deleteItem.remove();
            }
        })

}

function renderCourses (posts) {
    var htmls = posts.map(function (post) {
        return  `
            <ul class = "courses-${post.id}">
                <li > ${post.title} </li>
                <li> ${post.description} </li>
                <button onclick="deleteCourses(${post.id})"> Xoá </button>
            </ul>
        `;
    });

    view.innerHTML = htmls.join(" ")
}


function handlecreateCourses () {
    var send = document.getElementById("send")


    send.onclick = function () {
        var name = document.querySelector('input[name="title"]').value;
        var description = document.querySelector('input[name="description"]').value;

        const form = {
            title : name,
            description : description
        }

        createCourses(form,function (){
              getCoursesAPI(renderCourses);
        })
    }

}