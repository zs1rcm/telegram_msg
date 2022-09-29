//Simples Telegraph send message
//imamba.com zs1rcm


    const got =require('got');


    let api_token = 'inserttokenhere';
 


    let chat_id = process.argv[2];
    let message = process.argv[3];
    if(process.argv.length <= 2){
        console.log('Usage: mybot.exe <chatid> <message>');
        process.exit();
    }

    //Encode Message for sending
    message = encodeURIComponent(message);


  let url = 'https://api.telegram.org/bot' + api_token + '/SendMessage?chat_id=' + chat_id + '&text=' + message;

  console.log(url);
  got(url).then(response => {
    console.log(response.body);
  });