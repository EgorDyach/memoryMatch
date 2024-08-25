i=$1

for item in `ls`
do
  if [[ i -lt 120 ]]
  then
    let "new = $i + 90"
    mv end/card$i.webp end/card$(( $new )).webp
    ((i++))
  fi
done
