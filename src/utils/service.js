export const getData = (method, url, data) => {
  let DATA=wx.request({
    url: url,
    method: method,
    data: data,
    header: {
      "content-type": "application/json"
    },
    success: function(res) {
      return res.data
    }
  });
  return DATA;
};


