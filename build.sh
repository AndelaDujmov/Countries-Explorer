echo 'Brisanje prethodne slike countries-explorer'
docker rmi -f countries-explorer
echo 'Buildamo sliku countries-explorer'
docker build  -t countries-explorer --build-arg NODE_VERSION=current --build-arg USERNAME=andelduj .
echo 'Pokreni sliku countries-explorer'
docker run -p 3000:3000 countries-explorer 