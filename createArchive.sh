version="V1.10"

filename="etrian-heardle_"$version

git archive --prefix=$filename/ --format=zip --output=$filename.zip -9 HEAD
mv $filename.zip ./archive/$filename.zip
