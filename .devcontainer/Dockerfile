# Use the official Node.js image with a stable version
FROM node:18

# Set working directory inside the container
WORKDIR /workspace

# Install Yeoman and the VSCode extension generator globally
RUN npm install -g yo generator-code
RUN npm install -g vsce
# Set default shell to Bash
CMD [ "bash" ]
