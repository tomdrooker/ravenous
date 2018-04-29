const apiKey = '-ereJz_smRnlRJtEHAA3z-CGWJWWDECTQ1KuTeYqypNPHbpmGI_v8m4tibIxWCHQcl0PCNyyNlPkLvnnRGZnPjgBe4LCPa5Yua-XZG3hcggMJF-LrV3DHCt-h8rkWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          postCode: business.post_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
  });
  }
};

export default Yelp;
