interface Patient {
    id: number;
    name: string;
    species: string;
    age: number;
}

const patients: Patient[] = [
    {
        id: 1,
        name: "Hertta",
        species: "Koira",
        age: 6
    },
    {
        id: 2,
        name: "Misu",
        species: "Kissa",
        age: 4
    },
    {
        id: 3,
        name: "Osku",
        species: "Koira",
        age: 8
    }
];

const patientList =
    document.getElementById(
        "patientList"
    );

function renderPatients(): void {

    if (!patientList) {
        return;
    }

    patients.forEach(
        function (
            patient
        ) {

            const patientElement =
                document.createElement(
                    "div"
                );

            patientElement.className =
                "patient";

            patientElement.textContent =
                `${patient.name} – ${patient.species}, ${patient.age} v`;

            patientList.appendChild(
                patientElement
            );

        }
    );

}

const testButton =
    document.getElementById(
        "testButton"
    );

if (testButton) {

    testButton.addEventListener(
        "click",
        function () {

            alert(
                "Testipainike toimii"
            );

        }
    );

}

renderPatients();