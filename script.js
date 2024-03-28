$(document).ready(function() {
    console.log("Script loaded sxs");
    $("#langDropdown").change(function() {
      const selectedLanguage = $(this).val();
      $("#langBtn").text(selectedLanguage);
  
      // Update verse-view content
  if (selectedLanguage === "Dari") {
    $("#verse-view").text(dari_0);
    // $("#verse-ref").text("Dari reference text"); // Add Dari reference text
  } else if (selectedLanguage === "Hindi") {
    $("#verse-view").text(hindi_0);
    // $("#verse-ref").text("Hindi reference text"); // Add Hindi reference text
  } else if (selectedLanguage === "Urdu") {
    $("#verse-view").text(urdu_0);
    // $("#verse-ref").text("Urdu reference text"); // Add Urdu reference text
  } else if (selectedLanguage === "Select") {
    $("#verse-view").text("Select a language.");
    $("#verse-ref").text(""); // Add English reference text
  } else {
    $("#verse-view").text("Please select a language.");
    $("#verse-ref").text(""); // Clear reference text for invalid selection
  }
    });
  });