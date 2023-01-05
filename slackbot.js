<input type="checkbox" id="myCheckbox">

<script>
  document.getElementById('myCheckbox').addEventListener('change', function() {
    if(this.checked) {
      // Checkbox is checked, send notification to Slack
      fetch('https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK/URL', {
        method: 'POST',
        body: JSON.stringify({
          text: '<@USERNAME> Checkbox was checked!'
        })
      });
    }
  });
</script>
