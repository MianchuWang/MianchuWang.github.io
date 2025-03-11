const commands = [
    "help",
    "aboutme",
    "experiences",
    "education",
    "talks",
    "publications",
    "services"
];

$(document).ready(function () {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        $("#user-command-suggestion")[0].innerHTML = "Hello there!";
    }
    if (typeof $("#info-help").html() !== "undefined") {
        localStorage.setItem("infohelp", `${$("#info-help").html()}`);
    }
    if (typeof $("#info-aboutme").html() !== "undefined") {
        localStorage.setItem("infoaboutme", `${$("#info-aboutme").html()}`);
    }
    if (typeof $("#info-aboutme").html() !== "undefined") {
        localStorage.setItem("infoexp", `${$("#info-exp").html()}`);
    }
    if (typeof $("#info-edu").html() !== "undefined") {
        localStorage.setItem("infoedu", `${$("#info-edu").html()}`);
    }
    if (typeof $("#info-pub").html() !== "undefined") {
        localStorage.setItem("infopub", `${$("#info-pub").html()}`);
    }
    if (typeof $("#info-talk").html() !== "undefined") {
        localStorage.setItem("infotalk", `${$("#info-pub").html()}`);
    }
    if (typeof $("#info-services").html() !== "undefined") {
        localStorage.setItem("infoservices", `${$("#info-services").html()}`);
    }
});

function suggest() {
    if (
        $("#user-command")[0].innerHTML !== $("#user-command")[0].innerHTML.trim()
    ) {
        $("#user-command")[0].innerHTML = $("#user-command")[0].innerHTML.trim();
    }
    const suggestion = commands.find((command) =>
        command.startsWith($("#user-command")[0].innerHTML)
    );
    if (suggestion) {
        $("#user-command-suggestion")[0].innerHTML = suggestion.slice(
            $("#user-command")[0].innerHTML.length
        );
    } else {
        $("#user-command-suggestion")[0].innerHTML =
            "type 'help' to show available commands.";
    }
    if ($("#user-command")[0].innerHTML.length === 0) {
        $("#user-command-suggestion")[0].innerHTML =
            "type 'help' to show available commands.";
    }
}

function runCommand() {
    const command = $("#user-command")[0].innerHTML;
    let output;
    const timestamp = "[" + new Date().toLocaleString() + "] ";
    if (command === "help") {
        output = document.createElement("div");
        output.classList.add("flex");
        const helpDate = document.createElement("div");
        helpDate.innerHTML = timestamp;
        helpDate.classList.add("min-w-[161px]");
        output.appendChild(helpDate);
        const helpInfo = document.createElement("div");
        helpInfo.innerHTML = `
            <div id="date-help" class="min-w-[161px] invisible md:visible"></div>
            <div id="info-help" class="flex flex-col grow">
                <div class="font-bold mb-2">Help</div>
                <div class="flex justify-between">
                    <div class="flex flex-col my-auto space-y-2 md:space-y-1">
                        <div class="flex flex-col md:flex-row">
                            <div class="min-w-[150px]">aboutme:</div>
                            <div>Show my information</div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="min-w-[150px]">experiences:</div>
                            <div>Show my experience</div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="min-w-[150px]">education:</div>
                            <div>Show my education</div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="min-w-[150px]">publications:</div>
                            <div>Show my publications</div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="min-w-[150px]">talks:</div>
                            <div>Show my talks</div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="min-w-[150px]">services:</div>
                            <div>Show my services</div>
                        </div>
                    </div>
                </div>
            </div>
        `
        helpInfo.classList.add("grow");
        output.appendChild(helpInfo);
        $("#command-outputs")[0].prepend(output);
    } else if (command === "aboutme") {
        output = document.createElement("div");
        output.classList.add("flex");
        const aboutmeDate = document.createElement("div");
        aboutmeDate.innerHTML = timestamp;
        aboutmeDate.classList.add("min-w-[161px]");
        output.appendChild(aboutmeDate);
        const aboutmeInfo = document.createElement("div");
        aboutmeInfo.innerHTML = localStorage.infoaboutme;
        aboutmeInfo.classList.add("grow");
        output.appendChild(aboutmeInfo);
        $("#command-outputs")[0].prepend(output);
    } else if (command === "experiences") {
        output = document.createElement("div");
        output.classList.add("flex");
        const expDate = document.createElement("div");
        expDate.innerHTML = timestamp;
        expDate.classList.add("min-w-[161px]");
        output.appendChild(expDate);
        const expInfo = document.createElement("div");
        expInfo.innerHTML = localStorage.infoexp;
        expInfo.classList.add("grow");
        output.appendChild(expInfo);
        $("#command-outputs")[0].prepend(output);
    } else if (command === "education") {
        output = document.createElement("div");
        output.classList.add("flex");
        const educationDate = document.createElement("div");
        educationDate.innerHTML = timestamp;
        educationDate.classList.add("min-w-[161px]");
        output.appendChild(educationDate);
        const educationInfo = document.createElement("div");
        educationInfo.innerHTML = localStorage.infoedu;
        educationInfo.classList.add("grow");
        output.appendChild(educationInfo);
        $("#command-outputs")[0].prepend(output);
    } else if (command === "publications") {
        output = document.createElement("div");
        output.classList.add("flex");
        const publicationDate = document.createElement("div");
        publicationDate.innerHTML = timestamp;
        publicationDate.classList.add("min-w-[161px]");
        output.appendChild(publicationDate);
        const publicationInfo = document.createElement("div");
        publicationInfo.innerHTML = localStorage.infopub;
        publicationInfo.classList.add("grow");
        output.appendChild(publicationInfo);
        $("#command-outputs")[0].prepend(output);
    } else if (command === "talks") {
        output = document.createElement("div");
        output.classList.add("flex");
        const talkDate = document.createElement("div");
        talkDate.innerHTML = timestamp;
        talkDate.classList.add("min-w-[161px]");
        output.appendChild(talkDate);
        const talkInfo = document.createElement("div");
        talkInfo.innerHTML = localStorage.infotalk;
        talkInfo.classList.add("grow");
        output.appendChild(talkInfo);
        $("#command-outputs")[0].prepend(output);
    } else if (command === "services") {
        output = document.createElement("div");
        output.classList.add("flex");
        const servicesDate = document.createElement("div");
        servicesDate.innerHTML = timestamp;
        servicesDate.classList.add("min-w-[161px]");
        output.appendChild(servicesDate);
        const servicesInfo = document.createElement("div");
        servicesInfo.innerHTML = localStorage.infoservices;
        servicesInfo.classList.add("grow");
        output.appendChild(servicesInfo);
        $("#command-outputs")[0].prepend(output);
    } else {
        output = document.createElement("span");
        output.innerHTML = timestamp + "Command not found.";
        $("#command-outputs")[0].prepend(output);
    }

    $("#user-command").empty();
    suggest();
}

$("body").keypress(function (e) {
    $("#user-command")[0].innerHTML =
        $("#user-command")[0].innerHTML + String.fromCharCode(e.which);
    suggest();
});

$("body").keydown(function (e) {
    if (e.which === 32) {
        e.preventDefault();
    }
    if (e.which === 9) {
        e.preventDefault();
        if (
            $("#user-command-suggestion")[0].innerHTML !==
            "type 'help' to show available commands."
        ) {
            $("#user-command")[0].innerHTML =
                $("#user-command")[0].innerHTML +
                $("#user-command-suggestion")[0].innerHTML;
            $("#user-command-suggestion")[0].innerHTML = "";
        }
    }
    if (e.which == 8) {
        e.preventDefault();
        $("#user-command")[0].innerHTML = $("#user-command")[0].innerHTML.slice(
            0,
            -1
        );
        suggest();
    }
    if (e.which == 13) {
        e.preventDefault();
        runCommand();
    }
});

const timestamp = "[" + new Date().toLocaleString() + "]&nbsp;";
let dateDiv;
dateDiv = document.createElement("span");
dateDiv.innerHTML = timestamp;

if ($("#date-edu")[0]) {
    dateDiv = document.createElement("span");
    dateDiv.innerHTML = timestamp;
    $("#date-aboutme")[0].prepend(dateDiv);

    dateDiv = document.createElement("span");
    dateDiv.innerHTML = timestamp;
    $("#date-exp")[0].prepend(dateDiv);

    dateDiv = document.createElement("span");
    dateDiv.innerHTML = timestamp;
    $("#date-edu")[0].prepend(dateDiv);

    dateDiv = document.createElement("span");
    dateDiv.innerHTML = timestamp;
    $("#date-pub")[0].prepend(dateDiv);

    dateDiv = document.createElement("span");
    dateDiv.innerHTML = timestamp;
    $("#date-talk")[0].prepend(dateDiv);

    dateDiv = document.createElement("span");
    dateDiv.innerHTML = timestamp;
    $("#date-services")[0].prepend(dateDiv);
}
