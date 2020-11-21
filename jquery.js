jQuery(function($) {
  const $title = $('.header-title');
  const $questionForm = $('.question-form');
  
  let i = 0;
  const ans = [];

  // 出題分の出力
  function questionLoad() {
    $('#question-number').text(`第${questions[i].number}問！`);
    $('#question').text(`${questions[i].text}`);
    $('.x').html(`<label><input type="radio" name="answer" value="${questions[i].value1}">${questions[i].answer1}</label>`);
    $('.y').html(`<label><input type="radio" name="answer" value="${questions[i].value2}">${questions[i].answer2}</label>`);
    $('.z').html(`<label><input type="radio" name="answer" value="${questions[i].value3}">${questions[i].answer3}</label>`);
  };
  
  //結果発表
  function result() {
    let correct = 0;
    for (let p = 0; p < questions.length; p++) {
      if (ans[p] === 'true') {
        correct++;
      }
    }

    if (correct === questions.length) {
      setTimeout(function() {
        $('.result-wrapper').fadeIn();
        $('.result').html('<div class="result-image perfect"><p class="result-message1">なかなかやるな！<br>これからも学んでいこな！</p></div>');
      }, 800);
    } else if (correct === questions.length - 1) {
        setTimeout(function() {
          $('.result-wrapper').fadeIn();
          $('.result').html('<div class="result-image clear"><p class="result-message2">あと少しや！<br>勉強してまたチャレンジや！</p></div>');
        }, 800);
    } else if (correct === questions.length - 2) {
      setTimeout(function() {
        $('.result-wrapper').fadeIn();
        $('.result').html('<div class="result-image nomarter"><p class="result-message3">まだまだや！<br>もっぺん動画見直してきや！</p></div>');
      }, 800);
    } else {
        setTimeout(function() {
          $('.result-wrapper').fadeIn();
          $('.result').html(
            '<h1 style="font-size: 36px; padding-top: 40px;">残念...</h1><p style="padding-bottom: 40px;">次は頑張りましょう！</p>'
          );
          // $('.result-text').html('<p style="padding-bottom: 40px;">次は頑張りましょう！</p>');
        }, 800);
    }
  };

  // 見た目にこだわったあたり
  setTimeout(function() {
    $title.fadeIn();
  }, 200);


  setTimeout(function() {
    $('#telling').html(
      `これから、リベシティに関するクイズを出題します。<br>
      出題数は全${questions.length}問です。<br>
        マネーリテラシーの獲得を目指して頑張りましょう！`
    );
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

  // 回答ボタンの動作
  $('#answer-button').click(function(e) {
    e.preventDefault();
    
    ans[i] = $('input:radio[name="answer"]:checked').val();
    
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