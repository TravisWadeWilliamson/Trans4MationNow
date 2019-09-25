$(document).ready(function () {
  $('.preloader').fadeOut();

  // navBtn
  $('.navBtn').click(function () {
    $('.nav').toggleClass('nav-show');
  });

  // video switch
  $('.video__switch-container').click(function () {

    const value = $('.video__switch-btn').hasClass('btnSlide')

    if (value) {
      $('.video__switch-btn').removeClass('btnSlide');
      $('#video').get(0).play();
    }
    else {
      $('.video__switch-btn').addClass('btnSlide');
      $('#video').get(0).pause();
    }
  });

  // magnific popup  
  $('#projects__modal').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      // options for gallery
      enabled: true
    }
    // other options
  });

  // accordion
  $('.accordion__btn').click(function () {

    $('.accordion__btn').not(this).removeClass('rotate');
    $('.accordion__btn').not(this).parent().next().slideUp();


    $(this).toggleClass('rotate');
    $(this).parent().next().slideToggle();

  });

  // team members
  //iify --- instantly invoked function expression

  (function () {
    let data = [
      {
        id: 0,
        name: 'jimmy john',
        job: 'developer',
        text: `I make stuff happen. A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['eat', 'drink', 'sleep'],
        img: '../style/img/team-1.jpg'
      },
      {
        id: 1,
        name: 'tom orange',
        job: 'designer',
        text: `I don't care about functionality. A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['paint', 'draw', 'run'],
        img: '../style/img/team-2.jpg'
      },
      {
        id: 2,
        name: 'albert cupid',
        job: 'accountant',
        text: `I like to count beans. A biography is simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['math', 'physics', 'more math'],
        img: '/style/img/team-3.jpg'
      },
      {
        id: 3,
        name: 'dog hugo',
        job: 'team leader',
        text: `I'm the boss of you, all of you. A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['bark', 'run', 'bite'],
        img: '/style/img/team-4.jpg'
      }]
    $('.team-img__item').click(function () {
      // adding active class. This = the image we click on with the class 'team-img__item'
      $(this).addClass('active');

      // removing active class. If the image is not clicked we remove the class
      $('.team-img__item').not(this).removeClass('active');

      // change data - this = team image we've clicked and we'll target the data-id attribute
      let id = $(this).attr('data-id');

      $('.team-info__member-name').text(data[id].name);
      $('.team-info__member-job').text(data[id].job);
      $('.team-info__member-text').text(data[id].text);
      $('.team-info__member-single-favorite-text').each(function (index) {
        // here 'this' refers to each team-info__member-single-favorite-text index in the array that we're iterating over
        $(this).text(data[id].favorites[index]);
      });
      $('.team-info__img').attr('src', data[id].img);
    })
  })();

  // owl carousel
  $('.owl-carousel').owlCarousel ({
    loop: true,
    smartSpeed: 1000,
    touchDrag: true,
    mouseDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      }, 
      1000: {
        items: 1
      }
    }
  });
  $('.owl-prev').html('<div> <i class="fa fa-chevron-left"></i> </div>');
  $('.owl-next').html('<div> <i class="fa fa-chevron-right"></i> </div>')

});
