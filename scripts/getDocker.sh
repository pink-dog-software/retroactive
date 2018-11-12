curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker username
rm get-docker.sh

sudo systemctl enable docker
