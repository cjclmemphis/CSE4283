# Connor Carr-Laughlin
# cjc935

def bmi(weight, height):
    try:
        weight = int(weight)
        height = int(height)
    except ValueError:
        raise TypeError('Invalid input. Please enter a number.')
    weightKG = weight / 2.205
    heightM = height / 39.37
    bmi = weightKG / (heightM ** 2)
    bmi = round(bmi, 1)
    return bmi

def classifyBMI(bmi):
    if type(bmi) != float:
        raise TypeError('Invalid input. BMI must be a number.')
    
    if bmi < 18.5:
        return 'Underweight'
    elif bmi >= 18.5 and bmi <= 24.9:
        return 'Normal weight'
    elif bmi >= 25 and bmi <= 29.9:
        return 'Overweight'
    elif bmi >= 30:
        return 'Obese'
    
    
def main():
    while True:
        try:
            heightFt = int(input('Enter your height in feet: '))
            heightIn = int(input('Enter your height in inches: '))
            height = (heightFt * 12) + heightIn
            break
        except ValueError:
            print('Invalid input. Please enter a number.')

    while True:
        try:
            weight = int(input('Enter your weight in pounds: '))
            break
        except ValueError:
            print('Invalid input. Please enter a number.')
    
    result = bmi(weight, height)
    
    classification = classifyBMI(result)

    print('Your BMI is:', result)
    
    print('You are:', classification)
    
    
    while True:
        try:
            answer = input('Would you like to run the program again? (yes/no): ')
            if answer == 'yes':
                main()
            elif answer == 'no':
                print('Goodbye')
                break
            else:
                print('Invalid input. Please enter yes or no.')
        except ValueError:
            print('Invalid input. Please enter yes or no.')
                
                
                
if __name__ == '__main__':
    main()


