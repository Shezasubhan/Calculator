$(document).ready(function () {
    let displayValue = '';

    $(".btn").click(function () {
        const value = $(this).val();

        if (value === "C") {
            displayValue = '';
        } else if (value === "=") {
            try {
                displayValue = eval(displayValue);
            } catch {
                displayValue = 'Error';
            }
        } else {
            displayValue += value;
        }

        $("#display").val(displayValue);
    });

    $("#clear").click(function () {
        displayValue = '';
        $("#display").val(displayValue);
    });

    $("#equals").click(function () {
        try {
            displayValue = eval(displayValue);
        } catch {
            displayValue = 'Error';
        }
        $("#display").val(displayValue);
    });
});
