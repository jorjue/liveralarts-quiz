jQuery(function($) {
  const $title = $('.header-title');
  const $questionForm = $('.question-form');
  
  let i = 0;
  const ans = [];
  
  function questionLoad() {
    $('#question').text(`${questions[i].text}`);
    $('.x').html(`<label><input type="radio" name="answer" value="${questions[i].value1}">${questions[i].answer1}</label>`);
    $('.y').html(`<label><input type="radio" name="answer" value="${questions[i].value2}">${questions[i].answer2}</label>`);
    $('.z').html(`<label><input type="radio" name="answer" value="${questions[i].value3}">${questions[i].answer3}</label>`);
  };

  function result() {
    let correct = 0;
    for (let p = 0; p < questions.length; p++) {
      if (ans[p] === 'true') {
        correct++;
      }
    }

    console.log(correct);

    if (correct === questions.length) {
      setTimeout(function() {
        $('.result-wrapper').fadeIn();
        $('.result').html('<img src="answerImage3.png">');
      }, 800);
    } else if (correct === questions.length - 1) {
        setTimeout(function() {
          $('.result-wrapper').fadeIn();
          $('.result').html('<img src="answerImage2.png">');
        }, 800);
    } else if (correct === questions.length - 2) {
      setTimeout(function() {
        $('.result-wrapper').fadeIn();
        $('.result').html('<img src="answerImage1.png">');
      }, 800);
    } else {
        setTimeout(function() {
          $('.result-wrapper').fadeIn();
          $('.result').html('<h1 style="font-size: 36px; padding-top: 40px;">残念...</h1>');
          $('.result-text').html('<p style="padding-bottom: 40px;">次は頑張りましょう！</p>');
        }, 800);
    }
  };

  setTimeout(function() {
    $title.fadeIn();
  }, 200);

  setTimeout(function() {
    $('.orientation').fadeIn();
  }, 1200);

  $('#first-button').click(function() {
    $('#loading').fadeIn(0);

    setTimeout(function() {
      $('.orientation').fadeOut();
    }, 400);

    setTimeout(function() {
      questionLoad();
      $questionForm.fadeIn(600);
    }, 1200);
  });

  
  $('#answer-button').click(function(e) {
    e.preventDefault();
    
    ans[i] = $('input:radio[name="answer"]:checked').val();
    
    // １問目
    if (ans[i] === undefined) {
      $('#error').css('display', 'block');
    } else {
      $('#error').css('display', 'none');
      i++
      $questionForm.fadeOut();
      if (i === questions.length) {
        result();
      } else {
        setTimeout(function() {
          questionLoad();
          $questionForm.fadeIn();
        }, 400);
      }
    }
  });


});