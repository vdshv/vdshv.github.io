(function($) {
    'use strict';
    // following symptoms button selection

    $('.selection-btn').on('click', function(event) {
        $(this).toggleClass('active');
    })


})(jQuery);
$(document).ready(function() {
    $(".getStart").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").show();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();




    });
    $(".backGetstart").click(function() {
        $(".getstarted").show();
        $(".firstStep").hide();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();



    });
    $(".nextStepOne").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").show();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();




    });
    $(".backStepTwoButton").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").show();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();



    });
    $(".nextStepTwo").click(function() {
       $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").show();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide(); 





    });
    $(".backStepThreeButton").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").show();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();



    });
    $(".nextStepThree").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").show();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();



    });
    $(".backStepFourButton").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").show();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();


    });
    $(".nextStepFour").click(function() {
        // alert("hello");
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").show();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();


    });
    $(".backStepFiveButton").click(function() {
        // alert("hello");
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").show();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();


    });
    $(".nextStepFive").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").show();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();

    });
    $(".backStepSixButton").click(function() {
        // alert("hello");
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").show();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();
    });
    $(".nextStepSix").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").show();
        $(".stepEightInner").hide();

    });
    $(".backStepSevenButton").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").show();
        $(".stepSevenInner").hide();
        $(".stepEightInner").hide();
    });
    $(".nextStepSeven").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").hide();
        $(".stepEightInner").show();

    });
    $(".backStepEightButton").click(function() {
        $(".getstarted").hide();
        $(".firstStep").show();
        $(".stepOneInner").hide();
        $(".stepTwoInner").hide();
        $(".stepThreeInner").hide();
        $(".stepFourInner").hide();
        $(".stepFiveInner").hide();
        $(".stepSixInner").hide();
        $(".stepSevenInner").show();
        $(".stepEightInner").hide();
    });

    $(".yesButton").click(function () {
        if ($(this).attr('step') == 'one') {
            $(".stepOneNextBackSec").show();
        }
        else if ($(this).attr('step') == 'two') {
            $(".stepTwoNextBackSec").show();
        }
        else if ($(this).attr('step') == 'three') {
            $(".stepThreeNextBackSec").show();
        }
        else if ($(this).attr('step') == 'four') {
                if ($('.symptoms-select-col a.active').length > 0) {
                    $(".noButtonFour").hide();
                    $(".stepFourNextBackSec").show();

                } else {
                    $(".noButtonFour").show();
                    $(".stepFourNextBackSec").hide();

                }
        }
        else if ($(this).attr('step') == 'five') {
            $(".stepFiveNextBackSec").show();
        }
       

        
    });
  
    $(".noButton").click(function () {
        if ($(this).attr('step') == 'one') {
            $(".stepOneNextBackSec").hide();
            $(".getstarted").hide();
            $(".firstStep").show();
            $(".stepOneInner").hide();
            $(".stepTwoInner").show();
            $(".stepThreeInner").hide();
            $(".stepFourInner").hide();
            $(".stepFiveInner").hide();
            $(".stepSixInner").hide();
            $(".stepSevenInner").hide();
            $(".stepEightInner").hide();
        } else if ($(this).attr('step') == 'two') {
            $(".stepTwoNextBackSec").hide();
            $(".getstarted").hide();
            $(".firstStep").show();
            $(".stepOneInner").hide();
            $(".stepTwoInner").hide();
            $(".stepThreeInner").show();
            $(".stepFourInner").hide();
            $(".stepFiveInner").hide();
            $(".stepSixInner").hide();
            $(".stepSevenInner").hide();
            $(".stepEightInner").hide();
        } else if ($(this).attr('step') == 'three') {
            $(".stepThreeNextBackSec").hide();
            $(".getstarted").hide();
            $(".firstStep").show();
            $(".stepOneInner").hide();
            $(".stepTwoInner").hide();
            $(".stepThreeInner").hide();
            $(".stepFourInner").show();
            $(".stepFiveInner").hide();
            $(".stepSixInner").hide();
            $(".stepSevenInner").hide();
            $(".stepEightInner").hide();
        } else if ($(this).attr('step') == 'four') {
            $(".stepFourNextBackSec").hide();
            $(".getstarted").hide();
            $(".firstStep").show();
            $(".stepOneInner").hide();
            $(".stepTwoInner").hide();
            $(".stepThreeInner").hide();
            $(".stepFourInner").hide();
            $(".stepFiveInner").show();
            $(".stepSixInner").hide();
            $(".stepSevenInner").hide();
            $(".stepEightInner").hide();
        } else if ($(this).attr('step') == 'five') {
            $(".stepFiveNextBackSec").hide();
            $(".getstarted").hide();
            $(".firstStep").show();
            $(".stepOneInner").hide();
            $(".stepTwoInner").hide();
            $(".stepThreeInner").hide();
            $(".stepFourInner").hide();
            $(".stepFiveInner").hide();
            $(".stepSixInner").show();
            $(".stepSevenInner").hide();
            $(".stepEightInner").hide();
        }
        


    });


});

(function($) {
    'use strict';
    $('.selection').on('click', function() {
        $('.selection').removeClass('selected');
        $(this).addClass('selected');
    });
    // filter
    $(document).ready(function() {
        $("#filteritems").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#datatable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    // filter
    $(document).ready(function() {
        $("#filteritems2").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#datatable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    // Modal filter
    $(document).ready(function() {
        $("#modalfilter").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#modaltable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    // Load today's summary on page load
    var summaryUrl = 'https://wiserformscloud-wiserforms-main.azuremicroservices.io/api/todays-summary-statistics';
    var dashboardAlert = $( "#dashboardAlert" );
    dashboardAlert.hide();

    function fetchSummaryStats() {
        $.ajax({
            type: 'GET',
            url : summaryUrl,
            dataType : 'json',
            success : function(data)
            {
                console.log('Summary-statistics API success: ' + JSON.stringify(data));
                $('#scheduledCount').html(data.scheduled);
                $('#pendingCount').html(data.pending);
                $('#completedCount').html(data.completed);
                $('#positiveOutcomeCount').html(data.positiveOutcome);
            },
            error : function(xhr, textStatus, errorThrown)
            {
                var errorMsg = 'Ajax request failed: ' + xhr.responseText;
                $('#dashboardAlertContent').html(errorMsg);
                console.log(errorMsg);
                dashboardAlert.show();
            }
        });

    }
    // Executes every 60 seconds and fetches new data from the server
    // TODO: Should change to a common value used by the dashboard data table
    $(document).ready(function(){
        setInterval(fetchSummaryStats, 60000);
    });

    // INITIALIZE DATEPICKER PLUGIN
    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy"
    });


    // FOR DEMO PURPOSE
    $('#reservationDate').on('change', function() {
        var pickedDate = $('input').val();
        $('#pickedDate').html(pickedDate);
    });


    // Switch btn
    $('.switchbtn').on('click', function() {
        if ($(this).children().is(':checked')) {
            $(this).addClass('active');
            $('.schedule_actionblock').addClass('show');
        } else {
            $(this).removeClass('active');
            $('.schedule_actionblock').removeClass('show');
        }
    });
    // Yes No button
    $(".yes").click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        if ($(this).next().hasClass('active')) {
            $(this).next().removeClass('active');
        }
    });
    $(".no").click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        if ($(this).prev().hasClass('active')) {
            $(this).prev().removeClass('active');
        }
    });

    // following symptoms button selection
    $('.customcheckbox').on('click', function(event) {
        $(this).toggleClass('active');
    })

})(jQuery);
