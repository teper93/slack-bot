<input type="checkbox" id="myCheckbox">

<script>
  document.getElementById('myCheckbox').addEventListener('change', function() {
    if(this.checked) {
      // Checkbox is checked, send notification to Slack
      fetch('https://hooks.slack.com/services/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', {
        method: 'POST',
        body: JSON.stringify({
          text: '<@daniel.teper> Checkbox was checked!'
        })
      });
    }
  });
</script>
