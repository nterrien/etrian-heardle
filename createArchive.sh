version="V1.6"

filename="etrian-heardle_"$version

git archive --prefix=$filename/ --format=zip --output=$filename.zip -9 HEAD
cp $filename.zip ./archive/$filename.zip
