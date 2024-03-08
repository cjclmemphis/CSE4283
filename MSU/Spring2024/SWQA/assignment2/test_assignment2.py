import pytest
from assignment2 import bmi, classifyBMI


def test_bmi_invalid_input():
    with pytest.raises(TypeError):
        bmi('weight', 60)
    with pytest.raises(TypeError):
        bmi(150, 'height')
    with pytest.raises(TypeError):
        bmi('weight', 'height')

def test_bmi():
    assert bmi(150, 60) == 29.3
    assert bmi(150, 72) == 20.3
    assert bmi(200, 60) == 39.1
    assert bmi(200, 72) == 27.1
    assert bmi(250, 60) == 48.8
    

    
def test_classifyBMI_EPC():
    assert classifyBMI(18.4) == 'Underweight'
    assert classifyBMI(18.5) == 'Normal weight'
    assert classifyBMI(24.9) == 'Normal weight'
    assert classifyBMI(25.0) == 'Overweight'
    assert classifyBMI(29.9) == 'Overweight'
    assert classifyBMI(30.0) == 'Obese'
    assert classifyBMI(30.1) == 'Obese'
    
def test_classifyBMI_invalid_input():
    with pytest.raises(TypeError):
        classifyBMI('bmi')
    with pytest.raises(TypeError):
        classifyBMI(18)
    