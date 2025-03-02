function updateDateTime(){
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');

    const newDate = new Date();
    const day = newDate.toLocaleDateString("en-US", { weekday: "long" });
    const dateFormat = newDate.toLocaleDateString("en-US", {
        month: "long", 
        day: "2-digit",
        year: "numeric"
    });

    dayElement.textContent = day;
    dateElement.textContent = dateFormat;
}

updateDateTime();