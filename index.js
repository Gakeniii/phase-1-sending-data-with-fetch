// Add your code here
const nameData = document.createElement("input");
nameInput.placeholder = "Enter Name";
document.body.appendChild(nameData);

const emailData = document.createElement("input");
emailInput.placeholder = "Enter Email";
emailInput.type = "email";
document.body.append(emailData);

const submitBtn = document.createElement("button");
btn.textContent = "Submit Data";
btn.id = "submit-btn";
document.body.appendChild(submitBtn);

document.querySelector("#submit-btn").addEventListener("click", () => {
  submitData(nameData.value, emailData.value);
});

function submitData(name, email){
    return fetch('http://localhost:3000/user', {
            method:'POST',
            header: {
                'Content-type': 'application/json',
                'Accept': 'aplication/json'
            },
            body: JSON.stringify({name: "Steve",email: "steve@steve.com"})
            .then(res => res.json())
            .then((user) => {
            console.log(user);
            const userInput = document.createElement("p");
            userInfo.textContent = `Id: ${user.id}Name: ${user.name}, Email: ${user.email}`;
            document.body.appendChild(userInput);
            return user;
            })
            .catch((error) => {
            // console.log("Fetch error: ", error);
            const errorMessage = document.createElement("p");
            errorMessage.textContent = `Error:${error.message}`;
            })

        });
        
}


// Add your code here


function submitData(name, email) {
  console.log("Submitting data: ", { name, email });
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: 'Steve', email: 'steve@steve.com'}),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Response Error!");
      }
      return response.json();
    })
    .then((user) => {
      console.log(user);
      const userInfo = document.createElement("p");
      userInfo.textContent = `Id: ${user.id}Name: ${user.name}, Email: ${user.email}`;
      document.body.appendChild(userInfo);
      return user;
    })
    .catch((error) => {
      console.log("Fetch error: ", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `Error:${error.message}`;
      errorMessage.style.color = "red";
      errorMessage.style.fontWeight = "300";
      document.body.appendChild(errorMessage);
    });
}
submitData()