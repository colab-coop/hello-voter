# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN REACT_APP_ORGID=VT6WX8A \
    REACT_APP_AUDIANCE=hello-voter.coopernetes.colab.coop \
    REACT_APP_BASEURI=/voterambassador/staging \
    REACT_APP_APPPATH=voterambassador/staging \
    REACT_APP_API_DOMAIN=gotv-vt.ourvoiceusa.org \
    REACT_APP_API_SSL=true \
    REACT_APP_OAUTH_HEADER=x-sm-oauth-url \
    REACT_APP_TOKEN_KEY=token \
    REACT_APP_KEY=auth \
    REACT_APP_DEVELOPMENT=false \
    REACT_APP_API_URL=https://hellovoter.api.stage.colab.coop \
    REACT_APP_CALENDLY_LINK=https://calendly.com/ambassador-screening/10 \
    REACT_APP_TRIPLER_PAYMENT_AMT=50 \
    npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY .deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
