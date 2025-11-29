// Load sample data and populate table
fetch('data/sample-data.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#campaignTable tbody");
    data.campaigns.forEach(campaign => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${campaign.name}</td>
        <td>${campaign.clicks}</td>
        <td>${campaign.impressions}</td>
        <td>${campaign.ctr}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => console.error("Failed to load data", err));
