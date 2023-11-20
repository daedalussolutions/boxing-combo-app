

export const getCombo =  (comboOption) => {
    const comboOptions = {
        offensive: ['Jab', 'Cross', 'Left Hook', 'Right Hook', 'Lead Uppercut', 'Rear Uppercut', 'Liver Shot', 'Right Body Hook', 'Body Jab', 'Body Cross', 'Overhand Right', 'Slip'],
        defensive: ['Jab', 'Left Hook', 'Cross', 'Roll', 'Slip', 'Duck', 'Lay Back', 'Step Back', 'Pivot'],
        balanced: ['Jab', 'Cross', 'Left Hook', 'Lead Uppercut', 'Liver Shot', 'Body Jab', 'Roll', 'Slip', 'Duck', 'Lay-back', 'Step Back', 'Pivot'],
        reactive: ['Jab', 'Cross', 'Left Hook', 'Right Hook', 'Lead Uppercut', 'Rear Uppercut', 'Liver Shot', 'Right Body Hook', 'Body Jab', 'Body Cross', 'Overhand Right', 'Roll', 'Slip', 'Duck', 'Lay Back', 'Step Back', 'Pivot']
    }

    const selectedCombo = comboOptions[comboOption].sort(() => Math.random() - 0.5);
    
    switch (comboOption) {
        case 'offensive':
            console.log(selectedCombo)
            return selectedCombo.slice(8, selectedCombo.length);
        case 'defensive':
            console.log(selectedCombo)
            return selectedCombo.slice(5, selectedCombo.length);
        case 'balanced':
            console.log(selectedCombo)
            return selectedCombo.slice(4, selectedCombo.length);
        case 'reactive':
            console.log(selectedCombo)
            return selectedCombo.slice(8, selectedCombo.length);
    }
};