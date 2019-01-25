$(function () {
  let links = {
      "AL": "https://chat.whatsapp.com/invite/AE5XNCrgCw97kXpOgpP60x",
      "AS": "https://chat.whatsapp.com/invite/5enKVrBmGHR4mAiu3Xe9wy",
      "APS": "https://chat.whatsapp.com/invite/1jizfrPMSktEz23YRFTe9P",
      "BD": "https://chat.whatsapp.com/invite/8vif0BOxzlWGNGycOPXtrx",
      "CG": "https://chat.whatsapp.com/invite/1PM7g8PYdnUFaQ2jaHxegK",
      "CPW": "",
      "DP": "",
      "EE": "https://chat.whatsapp.com/invite/AJ89SuGJKCk2f88KFiutiP",
      "ES": "https://chat.whatsapp.com/invite/299DafjR19ZHDrn4Gqt3ey",
      "ED": "https://chat.whatsapp.com/invite/1HM3zgsqS1V1tHkZmRfpho",
      "FC": "https://chat.whatsapp.com/invite/8DD1ciMMZnq4MsKiw4VFZI",
      "FAC": "https://chat.whatsapp.com/invite/1LR0J8MFGKH87zA3xnNAF2",
      "FP": "https://chat.whatsapp.com/invite/HILormkmAz6BVsHEzLGzjY",
      "II": "",
      "IaI": "",
      "LIBRAS": "",
      "MB": "",
      "MC": "https://chat.whatsapp.com/invite/2wCw4ApAAGN2g1MuB0C5sM",
      "MI": "https://chat.whatsapp.com/invite/4FsWBbDDG1pKx40xXEktaN",
      "OC": "https://chat.whatsapp.com/invite/LrKauGOXr0o0yDgpCfEM3Y",
      "PE": "https://chat.whatsapp.com/invite/LC5s9wdU3ugLvXHCltQC6C",
      "PIG": "https://chat.whatsapp.com/invite/29yVM1Yyfhi3qOMvVugltS",
      "PAW": "https://chat.whatsapp.com/invite/AH7XFCWQYqkAH1j8laOh0Z",
      "POO": "https://chat.whatsapp.com/invite/2W1PUhSw3bGCwgi4GaQj0L",
      "PDA": "https://chat.whatsapp.com/invite/Dgnh6el1dIZ2gLz4F8LZa5",
      "RC1": "https://chat.whatsapp.com/invite/GFnMzhmXIUOLQOktn9WfVh",
      "RC2": "https://chat.whatsapp.com/invite/3S2bFXOh1iy6WZobHiHVSt",
      "SO": "https://chat.whatsapp.com/invite/12MW5gDnVJXKgaa8SVzkQA",
      "TCC": "https://chat.whatsapp.com/invite/51zHAM5BxGa7iIx8gIwSY3"
    };

  $(".wpp-button").on("click", function() {
    window.open(links[$(this).parent().parent().prop("id")], "_blank");
  });
});
