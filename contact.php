<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="css/styles.css" type="text/css" />
  <title>St. Peter's Anglican Church</title>
</head>

<body>
  <!-- Header -->
  <div id="topHeader" class="container-fluid">
    <div class="row">
      <a class="col-md-6 btn btn-danger btn-square btn-customFont" href="https://live.stpetesok.church" target="_blank">Watch our Livestream</a>
      <a class="col-md-6 btn btn-warning btn-square btn-customFont" href="https://vimeo.com/stpetesok" target="_blank">Watch our past messages</a>
    </div>
  </div>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-custom">
      <a class="navbar-brand" href="/"><img class="logo" src="images/stporetinalogo1.png" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
      </button>

      <div class="collapse navbar-collapse align-items-stretch" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Resources
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Sermons</a>
              <a class="dropdown-item" href="#">Prayer</a>
              <a class="dropdown-item" href="#">Lectionary</a>
              <a class="dropdown-item" href="local-churches">Local Churches</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Information
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">About Us</a>
              <a class="dropdown-item" href="#">Privacy</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Give</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="calendar">Calendar</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pastoralLetter disabled" href="#"><i class="fa fa-info-circle"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- End Header -->

  <!-- Map Area -->
  <div class="mapArea container">
    <h4 class="mapAreaHeader">Where To Find Us</h4>
    <div class="mapContainer">
      <iframe class="contactMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.7998127065844!2d-113.9854687837166!3d50.723652975521446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537198315b0ed4c1%3A0x5fae5f86cd6e807a!2sSt.%20Peter&#39;s%20Anglican%20Church!5e0!3m2!1sen!2sca!4v1604684774945!5m2!1sen!2sca"
        allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="contactSection container">
    <div class="row">
      <div class="col-lg-6 contactInfo">
        <h3 class="contactHeader">Contact Information</h3>
        <p><strong>Phone:</strong> 403-938-4261<br /><strong>Fax:</strong> 403-938-5685<br /><strong>Email:</strong>&nbsp;Use Form<br /><strong>Facebook:</strong> <a
            href="https://facebook.com/stpeterok">https://facebook.com/stpeterok</a><br /><strong>Twitter:</strong> <a href="https://twitter.com/saintpetesok">https://twitter.com/saintpetesok</a></p>
      </div>
      <div class="col-lg-6 contactForm">
        <h4 class="contactFormHeader">Send Us A Message</h4>
        <div class="formContainer">
          <form id="contactForm" action="contact.html">

            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name...">

            <label for="email">Email Address</label>
            <input type="text" id="email" name="email" placeholder="Your email address..." <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Compose your message..." style="height:200px"></textarea>

            <script src="https://www.google.com/recaptcha/api.js" async defer></script>

            <div class="g-recaptcha" data-sitekey="6LcXEzkUAAAAAKLxlNCmsQpl3awsbOU_j1GEqz2L"></div>
            <br />
            <input type="submit" value="Submit">

          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Give Section -->
  <div class="giveSection">
    <h4 class="givingHeader">Please Consider Giving To Our Church Using One Of The Methods Below</h4>
    <div class="row">
      <div class="col-md-4 giveImageContainer">
        <img class="giveImage" src="images/giving/CanadahelpsImage.png" />
      </div>
      <div class="col-md-4 giveImageContainer">
        <img class="giveImage" src="images/giving/CreditcardImage.png" />
      </div>
      <div class="col-md-4 giveImageContainer">
        <img class="giveImage" src="images/giving/EtransferImage.png" />
      </div>
    </div>
  </div>

  <!-- Bottom Section -->


  <!-- Footer Section -->
  <div class="footer">
    <p class="footerText">&copy; <?php echo date('Y'); ?> St. Peter's Anglican Church. Website created and managed by <a href="https://4uweb.design">4U WebDesign</a></p>
  </div>






  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/9831339778.js" crossorigin="anonymous"></script>
  <script src="js/index.js" type="text/javascript"></script>
  <script src="https://www.google.com/recaptcha/api.js"></script>
</body>

</html>
