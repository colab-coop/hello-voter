# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
ENV REACT_APP_ORGIDV T6WX8A
ENV REACT_APP_AUDIANCE blockpower.us
ENV REACT_APP_BASEURI /voterambassador/staging
ENV REACT_APP_APPPATH voterambassador/staging
ENV REACT_APP_API_DOMAIN gotv-vt.ourvoiceusa.org
ENV REACT_APP_API_SSL true
ENV REACT_APP_OAUTH_HEADER x-sm-oauth-url
ENV REACT_APP_TOKEN_KEY token
ENV REACT_APP_REDIRECT_URL https://hello-voter.coopernetes.colab.coop
ENV REACT_APP_DEVELOPMENT true
ENV REACT_APP_API_URL https://hellovoter.api.stage.colab.coop
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY .deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
