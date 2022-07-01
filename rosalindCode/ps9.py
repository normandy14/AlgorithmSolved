# FIBD - https://rosalind.info/problems/fibd/
    
def mortalRabbits(n, m):
    rabbits = []
    for i in range(m):
        rabbits.append(0)
    rabbits[1] = 1
    return mortalRabbitsHelp(n, m, rabbits)
    
def mortalRabbitsHelp(n, m, rabbits):
    if n <= 2:
        sumRabbits = sum(rabbits)
        print (sumRabbits)
        return sumRabbits
    sumChildren = 0
    for i in range(1, len(rabbits)):
        sumChildren += rabbits[i]
    for i in range(len(rabbits) - 2, -1, -1):
        rabbits[i+1] = rabbits[i]
    rabbits[0] = sumChildren
    return mortalRabbitsHelp(n-1, m, rabbits)
    
mortalRabbits(82, 20)
