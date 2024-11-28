$(document).ready(function(){
    $(".btn").click(function(){
        let row = $(this).closest("tr");

        let id = row.find("td").eq(0).text();
        let name = row.find("td").eq(1).text();
        let group = row.find("td").eq(2).text();

        $(".cart .id").text(`ID: ${id}`);
        $(".cart .name").text(`Name: ${name}`);
        $(".cart .group").text(`Group: ${group}`);

        $(".cart").fadeIn();
    })

    $(".close-btn").click(function(){
        $(".cart").fadeOut();
    })
})