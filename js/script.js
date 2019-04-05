/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/
/*
// Study guide for this project - https://teamtreehouse.com/projects/interactive-form

/***
  Declare global variables, including;
  Set focus on first field (name) on page load
**/
const $register = $("button[type='submit']");
let $fieldset = $("fieldset[class='activities']");
const $activityAlert = $("<span>Please select at least one activity</span>").css("font-weight", "bold");
const $cc = $("input[name='user_cc-num']");
let $ccCheck = $cc.val();
const $zip = $("input[name='user_zip']");
let $zipCheck = $zip.val();
const $cvv = $("input[name='user_cvv']");
let $cvvCheck = $cvv.val();

const $name = $("input[name='user_name']");
let $nameCheck = $name.val();
const $email = $("input[name='user_email']");
let $emailCheck = $email.val();
$name.focus();
$( "#other-title" ).hide();
const $otherInput = $('#other-title');

$("#title").on('change', function() {
  if ($(this).val() === 'other') {
    return $otherInput.show();
  } else {
    return $otherInput.hide();
  }
});

  //Assign color option values to variables
const $cornflowerblue = $("#color option[value='cornflowerblue']");
const $darkslategrey = $("#color option[value='darkslategrey']");
const $gold = $("#color option[value='gold']");
const $tomato = $("#color option[value='tomato']");
const $steelblue = $("#color option[value='steelblue']");
const $dimgrey = $("#color option[value='dimgrey']");
const $colorMenu = $("#colorMenu");

//  Show or hide color options depending on selected design
$("#design").on('change', function() {
  if ($(this).val() === 'js puns') {
    $colorMenu.prop("selected",true);
    $cornflowerblue.show(), $darkslategrey.show(), $gold.show();
    $tomato.hide(), $steelblue.hide(), $dimgrey.hide();
    $colorMenu.hide();
  } else if ($(this).val() === 'heart js') {
    $colorMenu.prop("selected",true);
    $tomato.show(), $steelblue.show(), $dimgrey.show();
    $cornflowerblue.hide(), $darkslategrey.hide(), $gold.hide();
    $colorMenu.hide();
  } else {
    $colorMenu.prop("selected",true);
    $cornflowerblue.show(), $darkslategrey.show(), $gold.show();
    $tomato.show(), $steelblue.show(), $dimgrey.show();
  }
});

const $checkbox = $("input[type='checkbox']");
const $jsFrameworks = $("input[name='js-frameworks']");
const $express = $("input[name='express']");
const $jsLibs = $("input[name='js-libs']");
const $node = $("input[name='node']");
const $mainConf = $("input[name='all']");
const $buildTools = $("input[name='build-tools']");
const $npm = $("input[name='npm']");
let cost = 0;
let $costUpdate = $("<span name='costUpdate'> 0 </span>");
let $costAlert = $("<span> Your Total is: " + '$' + " </span> ");

//  Deselect conflicting activities when one is selected
//  Reinstate option if checkbox is unclicked
$($jsFrameworks).click(function() {
  if ($jsFrameworks.prop('checked')) {
    $express.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($jsFrameworks.prop('checked', false)) {
    $express.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

$($express).click(function() {
  if ($express.prop('checked')) {
    $jsFrameworks.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($express.prop('checked', false)) {
    $jsFrameworks.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

$($jsLibs).click(function() {
  if ($jsLibs.prop('checked')) {
    $node.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($jsLibs.prop('checked', false)) {
    $node.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

$($node).click(function() {
  if ($node.prop('checked')) {
    $jsLibs.attr('disabled', 'disabled').parent().css("text-decoration", "line-through");
  } else if ($node.prop('checked', false)) {
    $jsLibs.attr('disabled', false).parent().css("text-decoration", "none");
  }
});

//Display running total for selected Activities
//Add, Subtract extra $100 for Main Conference
$checkbox.change(function(event) {
    if ($(this).prop('checked')) {
    cost += 100;
    $costUpdate.text(cost);
  } else if ($(this).prop('checked', false)) {
    cost -= 100;
    $costUpdate.text(cost);
  }
});

$mainConf.change(function(event) {
    if ($(this).prop('checked')) {
    cost += 100;
    $costUpdate.text(cost);
  } else if ($(this).prop('checked', false)) {
    cost -= 100;
    $costUpdate.text(cost);
  }
});

// Append calculated cost to bottom of activities section
$activities = $('.activities');
$activities.append($costAlert);
$costAlert.append($costUpdate);

// Display payment info for selected payment option
const $creditCard = $("select option[value='credit card']");
const $paypal = $("select option[value='paypal']");
const $bitcoin = $("select option[value='bitcoin']")
const $payment = $("select[name='user_payment']");
const $p_Paypal = $("p:contains('PayPal')");
const $p_Bitcoin = $("p:contains('Bitcoin')");
const $ccDetails = $("div[id='credit-card']").find("div, label, select");

//On page load, display credit card with no Paypal/Bitcoin info
$("select option[value='credit card']").attr("selected", true);
$("option[value='select_method']").attr("disabled", true);
// When PayPal is selected, hide other payment method details

$payment.change(function(event) {
  $ccDetails.hide();
  $p_Paypal.hide();
  $p_Bitcoin.hide();
  if ( $creditCard.is(":selected")) {
    $ccDetails.show();
 } else if ( $paypal.is(":selected")) {
    $p_Paypal.show();
 } else if ( $bitcoin.is(":selected")) {
    $p_Bitcoin.show();
 }
});

// Check that name field is not blank
// Highlight name field if empty on submit
// Highlight email field if empty on submit
// Highlight invalid email on submit

function isValidName() {
  if ($name.val().length === 0) {
    $name.attr("placeholder", "Please enter a name").css("background-color", "yellow");
  } else if ($nameCheck.length > 0) {
    $name.css("background-color", "white");
    return true;
  }
};

function isValidEmail() {
  const eRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ($email.val().length === 0) {
    $email.attr("placeholder", "Please enter an email address").css("background-color", "yellow");
  } else if (eRegex.test($emailCheck)) {
    return true;
  }
};

function isValidActivity() {
  let $checkbox = $("input[type='checkbox']");
  if ($("[type='checkbox']:checked").length == 0) {
    $checkbox.parent().css("background-color", "yellow");
    $fieldset.prepend($activityAlert);
  } else {
    return true;
  }
};

function isValidCC($ccCheck) {
  const ccRegex = /^[0-9 -]{13,16}$/;
  if ($cc.val().length === 0) {
    $cc.attr("placeholder", "Please enter a credit card number").css("background-color", "yellow");
  } else if (ccRegex.test($ccCheck)) {
    $cc.css("background-color", "#accbd9");
    console.log($ccCheck);
    return true;
  }
};

function isValidZip() {
  const zipRegex = /^[0-9]{5}$/;
  if ($zip.val().length === 0) {
    $zip.attr("placeholder", "Please enter a valid zip code.").css("background-color", "yellow");
  } else if (zipRegex.test($zipCheck)) {
    $zip.css("background-color", "#accbd9");
    console.log($zipCheck);
    return true;
  }
};

function isValidCVV() {
    const cvvRegex = /^[0-9]{3}$/;
    if ($cvv.val().length === 0) {
      $cvv.attr("placeholder", "Please enter a valid CVV code.").css("background-color", "yellow");
    } else if (cvvRegex.test($cvvCheck))  {
      $cvv.css("background-color", "#accbd9");
      console.log($cvvCheck);
      return true;
    }
};

$("form").submit(function(event) {
  let validName = isValidName();
  let validEmail = isValidEmail();
  let validActivity = isValidActivity();
  let validCC = isValidCC();
  let validZip = isValidZip();
  let validCVV = isValidCVV();
  if (validName && validEmail && validActivity && validCC && validZip && validCVV) {
    return true;
  } else {
    event.preventDefault();
  }
});

// Clear name field on user click
$name.click(function() {
  $name.css("background-color", "white");
});
// Clear email field on user clicks field
$email.click(function() {
  $email.css("background-color", "white");
});

$checkbox.click(function() {
    $checkbox.parent().css("background-color", "#85b5ca");
    $activityAlert.hide();
});

$cc.click(function(){
  $cc.css("background-color", "#accbd9");
});

$zip.click(function(){
  $zip.css("background-color", "#accbd9");
});

$cvv.click(function(){
  $cvv.css("background-color", "#accbd9");
});
