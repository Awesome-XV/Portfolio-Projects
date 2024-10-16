import random

# Enter name below
name = ''
# Enter question below 
question = ''
# Don't change anything else other than these two things if you want correct results based on the current code
answer = ''
random_number = random.randint(1, 9)

if random_number == 1:
    answer = 'Yes - definitely'
elif random_number == 2:
    answer = 'It is decidedly so'
elif random_number == 3:
    answer = 'Without a doubt'
elif random_number == 4:
    answer = 'Reply hazy, try again'
elif random_number == 5:
    answer = 'Ask again later'
elif random_number == 6:
    answer = 'Better not tell you now'
elif random_number == 7:
    answer = 'My sources say no'
elif random_number == 8:
    answer = 'Outlook not so good'
elif random_number == 9:
    answer = 'Very doubtful'
else:
    answer = 'Error: Unexpected random number please try again'

if question:
    if name:
        print(name + ' asks: ' + question)
    else:
        print('Question: ' + question)
    print('Magic 8-Ball`s answer: ' + answer)
else:
    if name:
        print(f'{name}, please ask a question.')
    else:
        print('Please ask a question.')