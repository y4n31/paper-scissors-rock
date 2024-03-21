let round = playerChoiceLower == computerChoiceLower;
            switch(round) {
                case playerChoiceLower == rock.toLowerCase() && computerChoiceLower == paper.toLowerCase():
                    return lose
                    break;
                case playerChoiceLower == paper.toLowerCase() && computerChoiceLower == scissors.toLowerCase():
                    return lose
                    break;
                case playerChoiceLower == scissors.toLowerCase() && computerChoiceLower == rock.toLowerCase():
                    return lose
                    break;
                case playerChoiceLower == computerChoiceLower:
                    return draw
                    break;
                case playerChoiceLower !== rock.toLowerCase() && playerChoiceLower !== paper.toLowerCase() && playerChoiceLower !== scissors.toLowerCase():
                    prompt('Choose one of the three gestures!')
                    break;
                default:
                    return win;
            }