function smartGarbage(trash, bins){
  if (trash === "waste"){
    bins.waste += 1 
    } else if (trash === "recycling"){
      bins.recycling +=1
        }
      else if (trash === "composte"){
      bins.composte +=1
  }

  return bins
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })

