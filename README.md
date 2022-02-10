# Local Weather 🌤 (ongoing project!)

This is a web application where users can view their local weather. The weather information is presented in multiple data points like the temperature, humidity, rain probability, and so on.

## Requirements 🎯

Below are several requirements I outlined before doing any coding or design.

Users will be able to:

- View their local weather data by their current location.
- View any local weather data by entering an address into an input box.
- Share their local weather on Twitter. This tweet will include a concise weather information as well as where the information is coming from.
- See who created the app and see where's the source code.
- See what technologies were used (in GitHub page).

The app should be able to:

- Have a secure way of connecting to geolocation & weather APIs.
- Request user’s current location through Browser APIs.
- Share the currently displayed weather data on Twitter.

## Challenges 🤔

Even though the idea is simple, creating this application provided several challenges for me to overcome. This required research & experimentation to get right. These challenges include:

- Dynamically updating background image using Tailwind CSS
- Usage of Geolocation API with React
- Finding a weather API with a free tier
- Finding a geocoding API with a free tier
- Animating components on mount & animating page transitions

## Tech Stack

Based on the challenges & requirements of the project, I settled on the following tech stack:

- **Tailwind CSS:** It doesn't _completely_ makes sense to utilize such a powerful CSS library on a project at this tiny scale, but I still wanted to use it in order to sharpen my Tailwind skills at a practical level.

- **React.js:** The app **runs on** weather data and **reacts** to it in several different ways (e.g. the dynamic background, weather-based color theme). So it made sense to utilize a UI library such as React in order to have components that render themselves based on the application state. In addition, React provides a neat framework around which I can structure application code in a modular fashion without much config work on my end.

- **Next.js:** There's a need to connect to the weather API in a secure fashion using the Weatherstack API key. Establishing this connection on the client side would expose my API key. Hence, I had two options: Implementing my own tiny web API as a middleman between the Weatherstack API and my client app, or using Next.js's SSR feature to establish that secure connection on the server side. I chose Next.js, because on top of the security aspect, it provides many perks such as automatic image optimization, out-of-the-box tooling configuration, lazy-loading, and [so much more](https://nextjs.org/#features).

- **Vercel:** Next.js plays really well with Vercel, plus they have a very generous free tier.

## Credits

- Weather icons by [Fatkhul Karim](https://www.iconfinder.com/fatkhulkarim)
- Data point icons by [FontAwesome](https://fontawesome.com)
- Loading icon by [EOS Icons](https://eos-icons.com/?iconName=bubble_loading&type=animated)
