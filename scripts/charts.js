fetch('data/sample-data.json')
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById('campaignChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.campaigns.map(c => c.name),
        datasets: [{
          label: 'Clicks',
          data: data.campaigns.map(c => c.clicks),
          backgroundColor: '#007bff'
        },
        {
          label: 'Impressions',
          data: data.campaigns.map(c => c.impressions),
          backgroundColor: '#28a745'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
      }
    });
  });
