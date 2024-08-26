  i=120
  new=0
  for item in `ls today`
  do
    if [[ $i -lt 150 ]]
    then
      mv today/card$i.webp today/card$new.webp
      ((i++))
      ((new++))
    fi
  done
