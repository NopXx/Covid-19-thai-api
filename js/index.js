// $.getJSON('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all', function(data) {
//     console.log(data);
// })

const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";

const new_case = document.getElementById("new_case");
const total_case = document.getElementById("total_case");
const new_death = document.getElementById("new_death");
const total_death = document.getElementById("total_death");
const new_recovered = document.getElementById("new_recovered");
const total_healing = document.getElementById("total_healing");
const update_date = document.getElementById("update_date");

fetch(url)
    .then(res => res.json())
    .then(data => {
    data.map((data, index) => {
        console.log(data);
        // console.log(Intl.NumberFormat().format(data.new_case));
        // ผู้ติดเชื้อรายใหม่
        new_case.innerHTML = Intl.NumberFormat().format(data.new_case);
        // รวมผู้ติดเชื้อทั้งหมด
        total_case.innerHTML = Intl.NumberFormat().format(data.total_case);
        // ผู้เสียชีวิตรายใหม่
        new_death.innerHTML = Intl.NumberFormat().format(data.new_death);
        // ผู้เสียชีวิตทั้งหมด
        total_death.innerHTML = Intl.NumberFormat().format(data.total_death);
        // หายป่วยกลับบ้าน
        new_recovered.innerHTML = Intl.NumberFormat().format(data.new_recovered);
        // ผู้ป่วยกำลังรักษา
        total_healing.innerHTML = Intl.NumberFormat().format((data.total_case - data.total_recovered - data.total_death));
        // Update
        update_date.innerHTML = "Update: "+ data.update_date;
    })
});

// console.log(datacovid);
