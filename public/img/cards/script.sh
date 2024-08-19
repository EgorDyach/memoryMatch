for item in `ls`
do 
itemName=`echo $item | cut -d "." -f 1`
echo "import $itemName from '/img/cards/cave/$item'" >> res
done