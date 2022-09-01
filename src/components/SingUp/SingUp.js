import { useEffect, useState } from 'react';
import s from './SingUp.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Button from 'components/UI/Button';

const priorityOptions = [
  'Frontend developer',
  'Backend developer',
  'Designer',
  'QA',
];

export const SingUp = ({ showModal }) => {
  const [priority, setPriority] = useState('Frontend developer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState({});
  const [disables, setDisablet] = useState(0);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      case 'file':
        console.log(evt.target.files[0]);
        setImage(evt.target.files[0].name);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPriority('Frontend developer');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setUser({ name, email, phone, priority, image });
    setDisablet(1);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            padding: '10px',
          }}
        >
          <TextField
            fullWidth
            label="Your name"
            id="fullWidth"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            padding: '10px',
          }}
        >
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            padding: '10px',
          }}
        >
          <TextField
            fullWidth
            label="Phone"
            id="fullWidth"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </Box>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Select your position
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="priority"
          >
            {priorityOptions.map(el => (
              <FormControlLabel
                key={el}
                value={el}
                control={<Radio checked={priority === el} />}
                label={el}
                onChange={handleChange}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <input
          id="file-laader-button"
          type="file"
          name="file"
          accept="image/jpg, image/jpeg"
          size="5 Mb"
          onChange={handleChange}
        />

        <div className={s.btn}>
          <Button type="submit" onClick={showModal}>
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};
